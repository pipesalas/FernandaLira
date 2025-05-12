import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Coffee, Award, Users, Book, User } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-slate-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-[0.04]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-slate-800 leading-tight mb-6 animate-fade-in">
                Welcome — I'm here to help you find clarity, strength, and emotional balance.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in-delay">
                As a psychologist with over 15 years of experience, I provide evidence-based therapy
                to help individuals overcome challenges and live more fulfilling lives.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
                <Button to="/contact" variant="primary" size="lg">
                  Schedule a Consultation
                </Button>
                <Button to="/about" variant="outline" size="lg">
                  Learn More About Me
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white animate-fade-in">
                  <img
                    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dr. Sarah Parker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-md px-4 py-2 animate-fade-in-delay-3">
                  <p className="text-blue-600 font-medium">Dr. Sarah Parker</p>
                  <p className="text-sm text-slate-500">Clinical Psychologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-800 mb-6">
              My Approach to Therapy
            </h2>
            <p className="text-lg text-slate-600">
              I believe in creating a safe, non-judgmental space where you can explore your thoughts and feelings.
              My approach combines evidence-based techniques with compassionate care tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 md:p-8 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Compassionate Care
              </h3>
              <p className="text-slate-600">
                Therapy is built on a foundation of empathy, understanding, and genuine care for your wellbeing.
              </p>
            </div>
            
            <div className="text-center p-6 md:p-8 bg-green-50 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Evidence-Based Methods
              </h3>
              <p className="text-slate-600">
                I use scientifically validated therapeutic approaches tailored to address your specific concerns.
              </p>
            </div>
            
            <div className="text-center p-6 md:p-8 bg-amber-50 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mx-auto mb-4">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Collaborative Approach
              </h3>
              <p className="text-slate-600">
                We work together as a team to identify goals, develop strategies, and create meaningful change.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-playfair font-semibold text-slate-800 mb-6">
              Educational Background
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center">
                <Award size={24} className="text-blue-600 mr-3" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Ph.D. in Clinical Psychology</p>
                  <p className="text-slate-600">Stanford University</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award size={24} className="text-blue-600 mr-3" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">M.S. in Counseling Psychology</p>
                  <p className="text-slate-600">University of California, Berkeley</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award size={24} className="text-blue-600 mr-3" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">B.A. in Psychology</p>
                  <p className="text-slate-600">Yale University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-800 mb-6">
              Services I Offer
            </h2>
            <p className="text-lg text-slate-600">
              I provide a range of psychological services to help you navigate life's challenges
              and achieve emotional wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Individual Therapy"
              description="One-on-one therapy sessions tailored to your unique needs, helping you work through personal challenges and grow."
              icon={<User size={24} />}
              to="/services"
            />
            <ServiceCard
              title="Couples Counseling"
              description="Improve communication, resolve conflicts, and strengthen your relationship with your partner."
              icon={<Users size={24} />}
              to="/services"
            />
            <ServiceCard
              title="Anxiety Management"
              description="Learn effective strategies to manage anxiety, reduce stress, and regain control of your thoughts and emotions."
              icon={<Activity size={24} />}
              to="/services"
            />
            <ServiceCard
              title="Depression Treatment"
              description="Evidence-based approaches to help you overcome depression and rediscover joy and purpose in your life."
              icon={<Heart size={24} />}
              to="/services"
            />
            <ServiceCard
              title="Trauma Recovery"
              description="Specialized therapy to help you process traumatic experiences and build resilience for the future."
              icon={<Award size={24} />}
              to="/services"
            />
            <ServiceCard
              title="Mindfulness Training"
              description="Learn mindfulness techniques to reduce stress, increase awareness, and improve your overall wellbeing."
              icon={<Book size={24} />}
              to="/services"
            />
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-800 mb-6">
              What My Clients Say
            </h2>
            <p className="text-lg text-slate-600">
              Hear from individuals who have experienced transformation through our work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="Dr. Parker helped me work through my anxiety in ways I never thought possible. Her compassionate approach and practical strategies have made a tremendous difference in my life."
              author="Jessica M."
              role="Client for 2 years"
            />
            <Testimonial
              quote="After struggling with depression for years, I finally found hope through therapy with Dr. Parker. She has a unique ability to listen and guide without judgment."
              author="Michael T."
              role="Client for 1 year"
            />
            <Testimonial
              quote="The tools I've gained from our sessions have transformed not just how I handle stress, but also how I approach my relationships and career challenges."
              author="Samantha K."
              role="Client for 3 years"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Taking the first step toward better mental health can be challenging, but you don't have to do it alone.
              I'm here to support you every step of the way.
            </p>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;