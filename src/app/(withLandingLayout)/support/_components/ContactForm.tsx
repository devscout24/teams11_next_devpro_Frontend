'use client';

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Loader2, CheckCircle2} from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, {message: 'First name must be at least 2 characters.'})
    .max(50, {message: 'First name must not exceed 50 characters.'}),
  email: z
    .string()
    .min(1, {message: 'Email is required.'})
    .email({message: 'Please enter a valid email address.'}),
  subject: z
    .string()
    .min(5, {message: 'Subject must be at least 5 characters.'})
    .max(100, {message: 'Subject must not exceed 100 characters.'}),
  message: z
    .string()
    .min(20, {message: 'Message must be at least 20 characters.'})
    .max(1000, {message: 'Message must not exceed 1000 characters.'}),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const {isSubmitting} = form.formState;

  function onSubmit(values: ContactFormValues) {
    // Simulate async submission
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('📬 Contact Form Submitted:', values);
        console.table(values);
        setSubmitted(true);
        resolve();
      }, 1200);
    });
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4 animate-in fade-in duration-500">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle2 className="text-green-500" size={28} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Message Sent!</h3>
        <p className="text-sm text-gray-500 max-w-xs">
          Thanks for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            form.reset();
          }}
          className="mt-2 text-sm text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({field}) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Subject */}
        <FormField
          control={form.control}
          name="subject"
          render={({field}) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject for your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({field}) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your inquiry.."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full font-semibold tracking-wide"
          disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </Form>
  );
}
