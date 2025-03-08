
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block relative">
            Contact Me
            <div className="h-1 w-1/4 bg-space-purple/70 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <p className="text-white/60 mt-4 max-w-3xl mx-auto">
            Let's start a conversation about your project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-space-darker/60 border-space-purple/30 focus:border-space-purple"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-space-darker/60 border-space-purple/30 focus:border-space-purple"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-space-darker/60 border-space-purple/30 focus:border-space-purple"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-space-darker/60 border-space-purple/30 focus:border-space-purple resize-none h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-space-purple hover:bg-space-purple/90 text-white"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="space-card p-8 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-space-purple/10 mr-4">
                    <Mail className="h-6 w-6 text-space-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-white/70 hover:text-space-purple transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-space-purple/10 mr-4">
                    <MapPin className="h-6 w-6 text-space-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Location</h4>
                    <p className="text-white/70">San Francisco, California</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-space-purple/10 mr-4">
                    <Phone className="h-6 w-6 text-space-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-white/70 hover:text-space-purple transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-white/70 mb-4">
                I'm currently available for freelance work and full-time positions.
                If you have a project that needs coding skills, I'm your developer!
              </p>
              <div className="flex flex-col space-y-2">
                <Button 
                  variant="outline" 
                  className="border-space-purple text-space-purple hover:bg-space-purple/10"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn Profile
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-space-purple text-space-purple hover:bg-space-purple/10"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
