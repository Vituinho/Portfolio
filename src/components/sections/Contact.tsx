'use client';

import React, { useState } from 'react';
import { useI18n } from '@/i18n/context';
import { contactData } from '@/data/contact';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../ui/Reveal';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { locale, t } = useI18n();
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = t.contact.form.validation.name;
    
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.validation.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.validation.email;
    }
    
    if (!formData.subject.trim()) newErrors.subject = t.contact.form.validation.subject;
    if (!formData.message.trim()) newErrors.message = t.contact.form.validation.message;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // There is no backend: hand the message to the visitor's email app, already addressed and filled in.
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${contactData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitStatus('success');
    setTimeout(() => setSubmitStatus('idle'), 10000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactOptions = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      title: "Email", 
      value: contactData.email, 
      link: `mailto:${contactData.email}`,
      copyAction: copyToClipboard,
      copied: copiedEmail
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      title: "WhatsApp", 
      value: locale === 'pt' ? "+55 (44) 92006-1196" : "+55 44 92006-1196", 
      link: contactData.whatsapp 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      title: "LinkedIn", 
      value: locale === 'pt' ? 'Perfil no LinkedIn' : 'LinkedIn profile',
      link: contactData.linkedin 
    },
    { 
      icon: <Github className="w-5 h-5" />, 
      title: "GitHub", 
      value: "github.com/vituinho", 
      link: contactData.github 
    }
  ];

  return (
    <section id="contact" className="section-shell">
      <Reveal className="w-full">
        <h2 className="section-title mb-3!">
          {t.contact.title}
        </h2>
        <p className="text-base text-text-secondary max-w-2xl leading-relaxed mb-8">
          {t.contact.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Methods Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
            {contactOptions.map((opt, idx) => (
              <Card key={idx} hoverEffect={true} className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-3 shrink-0 rounded-lg bg-accent-custom/5 text-accent-custom border border-accent-custom/10">
                    {opt.icon}
                  </span>
                  <div className="text-left min-w-0">
                    <span className="block text-[10px] uppercase font-bold text-text-secondary tracking-wider">
                      {opt.title}
                    </span>
                    <a
                      href={opt.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-text-primary hover:text-accent-custom hover:underline transition-all break-words"
                    >
                      {opt.value}
                    </a>
                  </div>
                </div>

                {opt.copyAction && (
                  <button
                    onClick={opt.copyAction}
                    className="size-11 shrink-0 inline-flex items-center justify-center rounded-lg border border-border-custom text-text-secondary hover:text-accent-custom hover:border-accent-custom/50 hover:bg-bg-secondary transition-colors cursor-pointer"
                    aria-label={t.contact.copyEmail}
                  >
                    {opt.copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Form card */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Card hoverEffect={false} className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-semibold text-text-secondary">
                      {t.contact.form.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`min-h-11 px-4 py-3 text-base rounded-lg bg-bg-secondary border text-text-primary transition-colors ${
                        errors.name 
                          ? "border-red-500 focus:border-red-500" 
                          : "border-border-custom focus:border-accent-custom"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-semibold text-text-secondary">
                      {t.contact.form.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`min-h-11 px-4 py-3 text-base rounded-lg bg-bg-secondary border text-text-primary transition-colors ${
                        errors.email 
                          ? "border-red-500 focus:border-red-500" 
                          : "border-border-custom focus:border-accent-custom"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="subject" className="text-xs font-semibold text-text-secondary">
                    {t.contact.form.subject} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`min-h-11 px-4 py-3 text-base rounded-lg bg-bg-secondary border text-text-primary transition-colors ${
                      errors.subject 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-border-custom focus:border-accent-custom"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-semibold text-text-secondary">
                    {t.contact.form.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`min-h-11 px-4 py-3 text-base rounded-lg bg-bg-secondary border text-text-primary transition-colors resize-none ${
                      errors.message 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-border-custom focus:border-accent-custom"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Notifications feedback */}
                <div role="status" aria-live="polite">
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-lg p-3 text-sm"
                      >
                        {t.contact.form.success} <a href={`mailto:${contactData.email}`} className="font-semibold underline underline-offset-4">{contactData.email}</a>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit button */}
                <div className="mt-2 flex flex-col gap-2">
                  <Button
                    type="submit"
                    aria-describedby="contact-form-hint"
                    className="gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    {t.contact.form.submit}
                  </Button>
                  <p id="contact-form-hint" className="text-xs text-text-secondary text-center">{t.contact.form.hint}</p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
