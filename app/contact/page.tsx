'use client';

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import PageLayout from '@/layouts/PageLayout';
import useLocale from '@/hooks/useLocale';
import { useSendEmailMutation } from '@/redux/reducers/portfolioApi';

export default function Contact() {
  const { t } = useLocale();

  const [defaultSubject, setDefaultSubject] = useState('');
  const [sendEmail, { isLoading: isSendingEmail, isSuccess: emailSent, error: sendingEmailError }] = useSendEmailMutation();

  const nameRef = useRef<HTMLInputElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    if (subject) {
      setDefaultSubject(subject);
    }
  }, [])

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSendingEmail || emailSent || !messageRef.current || !nameRef.current || !fromRef.current) return;

    sendEmail({ 
      from: fromRef.current.value,
      subject: defaultSubject || (subjectRef.current && subjectRef.current.value) || '',
      message: messageRef.current.value
    });
  };

  useEffect(() => {
    if (!emailSent && sendingEmailError) {
      alert(JSON.stringify(sendingEmailError));
    }
  }, [sendingEmailError]);

  return (
    <PageLayout>
      <div className='flex flex-col lg:p-10 lg:grid lg:grid-cols-2 lg:gap-10'>
        <section className='w-full text-center lg:text-left lg:mt-10'>
          <h1 className='font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl'>
            {t('contact')}
          </h1>
          <p className='text-lg mb-1'>
            {t('contactSubtitle')}
          </p>
          <p className='font-light mb-4'>
            {t('contactDescription1')}<br/>
            {t('contactDescription2')}
          </p>
        </section>
        
        <form className='flex flex-col w-full space-y-2' onSubmit={submit}>
          <input
            ref={nameRef}
            id='name'
            className='border-2	rounded-lg p-2'
            type='name'
            name='name'
            autoComplete='name'
            required
            placeholder={t('name')}
          />
          <input
            ref={fromRef}
            id='from'
            className='border-2	rounded-lg p-2'
            type='email'
            name='email'
            autoComplete='email'
            required
            placeholder={t('email')}
          />
          <input
            ref={subjectRef}
            id='subject'
            className='border-2	rounded-lg p-2'
            type='subject'
            name='subject'
            autoComplete='subject'
            required
            placeholder={t('subject')}
            defaultValue={defaultSubject}
            readOnly={!!defaultSubject}
          />
          <textarea 
            ref={messageRef}
            id='message' 
            name='message' 
            placeholder={t('message')} 
            className='border-2 rounded-lg p-2' 
            rows={5}
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
            disabled={emailSent}
            type='submit'>
            {!isSendingEmail ? (
                <div>
                  {emailSent ? t('submitted') : t('submit')}
                </div>
              ) : (
                <svg 
                  className='animate-spin h-6 w-6 text-white' 
                  xmlns='http://www.w3.org/2000/svg' 
                  fill='none' 
                  viewBox='0 0 24 24'
                >
                  <circle 
                    className='opacity-25' 
                    cx='12' 
                    cy='12' 
                    r='10' 
                    stroke='currentColor' 
                    strokeWidth='4'
                  />
                  <path 
                    className='opacity-75' 
                    fill='currentColor' 
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  >
                  </path>
                </svg>
              )
            }
          </button>
        </form>
      </div>
    </PageLayout>
  )
}