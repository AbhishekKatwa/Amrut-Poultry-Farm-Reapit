import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useSubmitContact } from "@/hooks/use-contact";
import { insertContactMessageSchema } from "@shared/schema";
import type { ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { mutate: submitContact, isPending } = useSubmitContact();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(insertContactMessageSchema),
  });

  const onSubmit = (data: ContactInput) => {
    submitContact(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out. We will get back to you shortly.",
          className: "bg-primary text-primary-foreground border-none",
        });
        reset();
      },
      onError: (err) => {
        toast({
          title: "Submission Failed",
          description: err.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-secondary/40 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking for wholesale partnerships, have questions
              about our farming practices, or want to place an order, we'd love
              to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        Farm Location
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                       Guledagudd, Shirur, Bagalkot
                        <br />
                        Karnataka, India 587203
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        +91 9035526551
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        amrutpoultryfarms@gmail.com
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        Operating Hours
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Mon-Sun: 6:00 AM - 6:00 PM
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* image decorative fresh eggs basket */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 h-64">
                <img
                  src="https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=800&auto=format&fit=crop"
                  alt="Fresh eggs in basket"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3 bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-8">Send us a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      className={`w-full px-5 py-4 rounded-xl bg-background border-2 ${errors.name ? "border-destructive focus:ring-destructive/10" : "border-border focus:border-primary focus:ring-primary/10"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive ml-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`w-full px-5 py-4 rounded-xl bg-background border-2 ${errors.email ? "border-destructive focus:ring-destructive/10" : "border-border focus:border-primary focus:ring-primary/10"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive ml-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground ml-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full px-5 py-4 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-primary/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200"
                    placeholder="+91 98765-43210"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive ml-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground ml-1">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className={`w-full px-5 py-4 rounded-xl bg-background border-2 ${errors.message ? "border-destructive focus:ring-destructive/10" : "border-border focus:border-primary focus:ring-primary/10"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 transition-all duration-200 resize-none`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive ml-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 text-lg mt-4"
                >
                  {isPending ? "Sending..." : "Send Message"}
                  {!isPending && <Send className="w-5 h-5" />}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
