import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-6">
              Contact Me
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Feel free to reach out. I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-slate-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 mb-8">
                Whether you're ready to schedule an appointment or just have questions
                about my services, I'm here to help. Fill out the form, and I'll
                respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">Phone</h3>
                    <p className="text-slate-600">(555) 123-4567</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Monday - Friday, 9am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">Email</h3>
                    <p className="text-slate-600">fernandailirae@example.com</p>
                    <p className="text-sm text-slate-500 mt-1">
                      I respond to emails within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">Office Location</h3>
                    <p className="text-slate-600">
                      123 Wellness Street, Suite 101
                      <br />
                      San Francisco, CA 94107
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Near public transportation
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Clock size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">Office Hours</h3>
                    <div className="text-slate-600">
                      <p>Monday - Friday: 9am - 6pm</p>
                      <p>Saturday: 10am - 2pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-playfair font-semibold text-slate-800 mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-semibold text-slate-800 mb-6 text-center">
              Office Location
            </h2>
            <div className="rounded-lg overflow-hidden shadow-sm h-96 bg-white">
              {/* Replace with actual map integration if needed */}
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="text-slate-400 mb-4 mx-auto" />
                  <p className="text-slate-600 max-w-md">
                    123 Wellness Street, Suite 101
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;