'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactForm({ translations: t }: { translations: any }) {
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          subject,
          message: message + `\n\n${from}`
        }),
      });

      setIsSubmitted(response.ok);
    } catch (error) {
      alert(t['error'])
    }
    setIsSubmitting(false);
  };

  return (
    <form className="flex flex-col w-full space-y-2" onSubmit={submit}>
      <input
        id="name"
        className="border-2	rounded-lg p-2"
        type="name"
        name="name"
        autoComplete="name"
        required
        placeholder={t['name']}
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
      />
      <input
        id="from"
        className="border-2	rounded-lg p-2"
        type="email"
        name="email"
        autoComplete="email"
        required
        placeholder={t['email']}
        value={from}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setFrom(event.target.value)}
      />
      <input
        id="subject"
        className="border-2	rounded-lg p-2"
        type="subject"
        name="subject"
        autoComplete="subject"
        required
        placeholder={t['subject']}
        value={subject}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSubject(event.target.value)}
      />
      <textarea 
        id="message" 
        name="message" 
        placeholder={t['message']} 
        className="border-2 rounded-lg p-2" 
        rows={5}
        value={message}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
      >
      </textarea>
      <button 
        className={`
          flex 
          rounded-full 
          bg-lightBlack 
          p-2 px-4 
          text-white 
          justify-center
          disabled:opacity-75`} 
        disabled={isSubmitted}
        type="submit">
        {!isSubmitting ? (
            <div>
              {isSubmitted ? t['submitted'] : t['submit']}
            </div>
          ) : (
            <svg 
              className="animate-spin h-6 w-6 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              >
              </path>
            </svg>
          )
        }
      </button>
    </form>
  );
}