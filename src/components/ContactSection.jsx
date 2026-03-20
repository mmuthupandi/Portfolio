import React, { useState, useRef } from 'react';
import { MagneticButton } from './MagneticButton';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

// --- Simple email validator ---
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactSection = () => {
    const [status, setStatus] = useState(null); // null | 'success' | 'error' | 'loading' | 'duplicate'
    const [errorMsg, setErrorMsg] = useState('');
    const lastSubmitTime = useRef(0); // anti-spam: track time of last submission

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // --- Client-side validation ---
        if (!name || !email || !message) {
            setErrorMsg('Please fill in all fields.');
            return;
        }
        if (!isValidEmail(email)) {
            setErrorMsg('Please enter a valid email address.');
            return;
        }
        if (message.length < 10) {
            setErrorMsg('Message must be at least 10 characters.');
            return;
        }

        // --- Basic spam throttle: 60s between submissions ---
        const now = Date.now();
        if (now - lastSubmitTime.current < 60000) {
            setStatus('duplicate');
            return;
        }

        setStatus('loading');

        try {
            // Race addDoc against a 10s timeout so it never hangs forever
            const timeout = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('timeout')), 10000)
            );

            await Promise.race([
                addDoc(collection(db, 'contact_submissions'), {
                    name,
                    email,
                    message,
                    submittedAt: new Date().toISOString(),
                }),
                timeout,
            ]);

            lastSubmitTime.current = Date.now();
            setStatus('success');
            form.reset();
        } catch (err) {
            console.error('Firestore error:', err);
            const code = err?.code || err?.message || 'unknown';
            if (code === 'timeout') {
                setErrorMsg('Request timed out. Firestore may not be set up yet.');
            } else if (code.includes('permission-denied')) {
                setErrorMsg('Permission denied — check Firestore security rules.');
            } else if (code.includes('not-found') || code.includes('unavailable')) {
                setErrorMsg('Firestore database not found. Please create it in Firebase Console.');
            } else {
                setErrorMsg(`Error: ${code}`);
            }
            setStatus('error');
        }
    };

    return (
        <div id="contact" className="relative min-h-screen bg-background-light dark:bg-background-dark w-full max-w-7xl mx-auto border-x border-gray-100 dark:border-gray-900 p-8 flex flex-col justify-center">
            <div className="space-y-8 min-h-screen flex flex-col justify-center items-center text-center pb-16">
                <div className="space-y-4">
                    <h2 className="text-3xl font-black tracking-tight dark:text-white">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="max-w-md w-full space-y-8">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed md:px-8">
                        Interested in working together or just want to say hi? I'd love to hear from you.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold dark:text-white">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white disabled:opacity-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold dark:text-white">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white disabled:opacity-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold dark:text-white">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white min-h-[120px] disabled:opacity-50"
                            ></textarea>
                        </div>

                        {/* Inline validation error */}
                        {errorMsg && (
                            <p className="text-sm text-red-500 font-medium animate-fadeIn">{errorMsg}</p>
                        )}

                        <MagneticButton
                            type="submit"
                            variant="primary"
                            size="md"
                            className="w-full font-bold py-4"
                            disabled={status === 'loading' || status === 'success'}
                        >
                            {status === 'loading' ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                                    </svg>
                                    Sending...
                                </span>
                            ) : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
                        </MagneticButton>
                    </form>

                    {/* Status Messages */}
                    {status === 'success' && (
                        <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg animate-fadeIn text-sm font-semibold">
                            🎉 Thanks! Your message has been received. I'll get back to you soon.
                        </div>
                    )}
                    {status === 'duplicate' && (
                        <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-lg animate-fadeIn text-sm font-semibold">
                            ⏳ You've already sent a message recently. Please wait a little before sending again.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg animate-fadeIn text-sm font-semibold">
                            ❌ {errorMsg || 'Submission failed. Please try again.'}
                        </div>
                    )}

                    {/* Centered Footer Section */}
                    <div className="pt-8 pb-32 md:pb-12 flex flex-col items-center gap-6">
                        <div className="flex justify-center gap-4">
                            {[
                                { name: 'linkedin', url: 'https://www.linkedin.com/in/mmuthupandi' },
                                { name: 'github', url: 'https://github.com/mmuthupandi' },
                                { name: 'whatsapp', url: 'https://wa.me/919659970288?' }
                            ].map(platformObj => {
                                const platform = platformObj.name;
                                let Icon = null;
                                if (platform === 'linkedin') {
                                    Icon = <svg x="0px" y="0px" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>;
                                } else if (platform === 'github') {
                                    Icon = <svg x="0px" y="0px" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
                                } else {
                                    Icon = <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 436.8c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>;
                                }
                                return (
                                    <a key={platform} href={platformObj.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-primary hover:text-white transition-colors text-slate-600 dark:text-slate-400">
                                        {Icon}
                                    </a>
                                );
                            })}
                        </div>
                        <p className="text-xs sm:text-sm text-primary font-medium tracking-wide">
                            &copy; 2026 Muthupandi M. All Rights Reserved.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactSection;
