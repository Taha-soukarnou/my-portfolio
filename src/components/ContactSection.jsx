import React from "react";
import { Linkedin, Mail, Phone, Send } from "lucide-react";
import cn from "@/lib/utils";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas and new
          oppurtunities, Feel free to reach out .
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
              Contact Informations
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:soukarnoutaha@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    soukarnoutaha@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10 mr-13">
                <Phone className="h-6 w-6 text-primary" />{" "}
              </div>
              <div className="text-center pr-4">
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+212770638749"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {"      "}+212 770638749
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10 mr-14">
                <Linkedin className="h-6 w-6 text-primary" />{" "}
              </div>
              <div className="text-center">
                <h4 className="font-medium">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/soukarnou-taha-53146b339"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Soukarnou Taha
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-3 rounded-lg shadow-xs ">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
              Send a Message
            </h3>
            <form className="space-y-4  items-center text-center">
              <div>
                <label htmlFor="name" className="block mb-2 ">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-90  px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  placeholder="example name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 ">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-90  px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 ">
                  Your Name
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-90  px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary  resize-none"
                  placeholder="hello, i would like to talk about..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button ml-9 w-90 flex items-center justify-center gap-2 mb-3",
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
