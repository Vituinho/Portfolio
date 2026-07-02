'use client';

import React, { useState } from 'react';
import { useI18n } from '@/i18n/context';
import { contactData } from '@/data/contact';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate backend submission (Server Action or API integration endpoint)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-hide success toast after 5s
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
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
      value: locale === 'pt' ? "+55 (44) 92000-9524" : "+55 44 92000-9524", 
      link: contactData.whatsapp 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      title: "LinkedIn", 
      value: "linkedin.com/in/victoremanuel", 
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
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-3 relative pb-3 border-b border-border-custom max-w-max">
          {t.contact.title}
        </h2>
        <p className="text-sm text-text-secondary mb-12">
          {t.contact.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Methods Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
            {contactOptions.map((opt, idx) => (
              <Card key={idx} hoverEffect={true} className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-lg bg-accent-custom/5 text-accent-custom border border-accent-custom/10">
                    {opt.icon}
                  </span>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase font-bold text-text-secondary tracking-wider">
                      {opt.title}
                    </span>
                    <a
                      href={opt.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-text-primary hover:text-accent-custom hover:underline transition-all"
                    >
                      {opt.value}
                    </a>
                  </div>
                </div>

                {opt.copyAction && (
                  <button
                    onClick={opt.copyAction}
                    className="p-1.5 rounded-lg border border-border-custom text-text-secondary hover:text-accent-custom hover:border-accent-custom/50 hover:bg-bg-secondary transition-all cursor-pointer"
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
                      disabled={isSubmitting}
                      className={`px-4 py-2 text-sm rounded-lg bg-bg-secondary border text-text-primary outline-none transition-all ${
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
                      disabled={isSubmitting}
                      className={`px-4 py-2 text-sm rounded-lg bg-bg-secondary border text-text-primary outline-none transition-all ${
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
                    disabled={isSubmitting}
                    className={`px-4 py-2 text-sm rounded-lg bg-bg-secondary border text-text-primary outline-none transition-all ${
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
                    disabled={isSubmitting}
                    className={`px-4 py-2 text-sm rounded-lg bg-bg-secondary border text-text-primary outline-none transition-all resize-none ${
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
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-lg p-3 text-xs font-semibold"
                    >
                      {t.contact.form.success}
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg p-3 text-xs font-semibold"
                    >
                      {t.contact.form.error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
