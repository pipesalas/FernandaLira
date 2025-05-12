import React from 'react';
import { User, Users, Activity, Heart, Award, Book, Coffee, MessageSquare } from 'lucide-react';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-6">
              My Services
            </h1>
            <p className="text-lg text-slate-600">
              Evidence-based therapy to help you navigate life's challenges and achieve emotional wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <User size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Individual Therapy
                  </h3>
                  <p className="text-slate-600 mb-4">
                    One-on-one therapy sessions tailored to your unique needs, helping you work through
                    personal challenges, develop coping strategies, and achieve meaningful growth.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $150 per 50-minute session
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Users size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Couples Counseling
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Improve communication, resolve conflicts, and strengthen your relationship with
                    your partner through guided sessions focused on mutual understanding and growth.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $175 per 60-minute session
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Activity size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Anxiety Management
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Learn effective strategies to manage anxiety, reduce stress, and regain
                    control of your thoughts and emotions using evidence-based techniques.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $150 per 50-minute session
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Heart size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Depression Treatment
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Evidence-based approaches to help you overcome depression and rediscover
                    joy and purpose in your life, with compassionate support throughout your journey.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $150 per 50-minute session
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Award size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Trauma Recovery
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Specialized therapy to help you process traumatic experiences and build
                    resilience for the future, using EMDR and other trauma-informed approaches.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $165 per 50-minute session
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Book size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Mindfulness Training
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Learn mindfulness techniques to reduce stress, increase awareness, and improve
                    your overall wellbeing through guided practices and personalized strategies.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $140 per 50-minute session
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Coffee size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Stress Management
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Develop effective strategies to manage stress in your personal and professional
                    life, improving your resilience and overall wellbeing.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $140 per 50-minute session
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <MessageSquare size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Initial Consultation
                  </h3>
                  <p className="text-slate-600 mb-4">
                    A 30-minute session to discuss your concerns, answer your questions, and
                    determine if we're a good fit to work together on your mental health journey.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $75 per 30-minute session
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
              What to Expect
            </h2>
            <p className="text-slate-600">
              Understanding the therapy process can help ease any concerns you might have.
              Here's what to expect when working with me.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

              {/* Steps */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Initial Consultation
                      </h3>
                      <p className="text-slate-600">
                        We'll discuss your concerns, goals, and expectations for therapy to
                        determine if we're a good fit.
                      </p>
                    </div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        1
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 hidden md:block"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 hidden md:block"></div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        2
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 md:text-left">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Assessment
                      </h3>
                      <p className="text-slate-600">
                        I'll gather information about your history, current situation, and
                        specific challenges to develop a comprehensive understanding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Treatment Planning
                      </h3>
                      <p className="text-slate-600">
                        Together, we'll establish clear goals and develop a personalized
                        treatment plan tailored to your specific needs.
                      </p>
                    </div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        3
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 hidden md:block"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 hidden md:block"></div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        4
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 md:text-left">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Ongoing Therapy
                      </h3>
                      <p className="text-slate-600">
                        Regular sessions focused on addressing your concerns, developing skills,
                        and making progress toward your goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Progress Evaluation
                      </h3>
                      <p className="text-slate-600">
                        We'll regularly assess your progress, adjust our approach as needed,
                        and celebrate the positive changes you're making.
                      </p>
                    </div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        5
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-playfair font-semibold text-slate-800 mb-6 text-center">
                Insurance & Payment
              </h2>
              <p className="text-slate-600 mb-6 text-center">
                I accept various insurance plans and payment options to make therapy accessible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-3">
                    Accepted Insurance Plans
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Blue Cross Blue Shield
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Aetna
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Cigna
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      United Healthcare
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Medicare
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-3">
                    Payment Options
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Credit/Debit Cards
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      HSA/FSA
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Sliding Scale Fees (limited availability)
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Out-of-Network Benefits
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-600 mt-6 text-center">
                Please contact me to verify your insurance coverage or discuss payment options.
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Schedule your initial consultation today, and let's take the first step toward
              your mental health and wellbeing.
            </p>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;