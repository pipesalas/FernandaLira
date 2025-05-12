import React from 'react';
import { Award, BookOpen, Coffee, Heart } from 'lucide-react';
import Button from '../components/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-6">
              About Dr. Sarah Parker
            </h1>
            <p className="text-lg text-slate-600">
              Clinical Psychologist dedicated to helping you achieve emotional wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Dr. Sarah Parker"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
                My Journey
              </h2>
              <p className="text-slate-600 mb-4">
                With over 15 years of experience as a clinical psychologist, I've dedicated my career to helping individuals
                navigate life's challenges and achieve emotional wellbeing.
              </p>
              <p className="text-slate-600 mb-4">
                My approach to therapy is both compassionate and evidence-based. I believe in creating a safe,
                non-judgmental space where you can explore your thoughts and feelings, gain insights,
                and develop strategies for positive change.
              </p>
              <p className="text-slate-600 mb-6">
                I specialize in treating anxiety, depression, trauma, and relationship issues. Each therapy
                plan is tailored to meet the unique needs of the individual, drawing from various therapeutic
                modalities including Cognitive-Behavioral Therapy (CBT), Mindfulness-Based Cognitive Therapy,
                and Psychodynamic approaches.
              </p>

              <div className="flex gap-4">
                <Button to="/services" variant="primary">
                  My Services
                </Button>
                <Button to="/contact" variant="outline">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
              Education & Credentials
            </h2>
            <p className="text-slate-600">
              My extensive education and training have prepared me to provide the highest quality care.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    Ph.D. in Clinical Psychology
                  </h3>
                  <p className="text-slate-600 mb-1">Stanford University, 2008</p>
                  <p className="text-slate-500 text-sm">
                    Dissertation: "The Efficacy of Mindfulness-Based Interventions in Treating Anxiety Disorders"
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    M.S. in Counseling Psychology
                  </h3>
                  <p className="text-slate-600 mb-1">University of California, Berkeley, 2005</p>
                  <p className="text-slate-500 text-sm">
                    Focus on evidence-based treatment approaches and therapeutic techniques
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    B.A. in Psychology
                  </h3>
                  <p className="text-slate-600 mb-1">Yale University, 2003</p>
                  <p className="text-slate-500 text-sm">
                    Graduated summa cum laude, with honors in Psychology
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    Licensed Clinical Psychologist
                  </h3>
                  <p className="text-slate-600 mb-1">California State License #PSY12345</p>
                  <p className="text-slate-500 text-sm">
                    Licensed to practice in the state of California since 2010
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
              My Philosophy
            </h2>
            <p className="text-slate-600">
              I believe in a holistic, compassionate approach to mental health that addresses
              the whole person — mind, body, and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Compassion-Centered
              </h3>
              <p className="text-slate-600">
                I approach each client with genuine empathy and understanding, creating a safe space
                for exploration and healing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Evidence-Based
              </h3>
              <p className="text-slate-600">
                I integrate the latest research and proven therapeutic approaches to provide effective,
                science-backed treatment.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mx-auto mb-4">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Collaborative
              </h3>
              <p className="text-slate-600">
                Therapy is a partnership. I work closely with you to develop personalized strategies
                that align with your goals and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              I'm here to support you on your journey toward emotional wellbeing and personal growth.
              Let's work together to help you live a more fulfilling life.
            </p>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;