import {ContactForm} from '@/app/component/teams/support/ContactForm';

export default function SupportPage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            How can we <span className="text-primary">help?</span>
          </h1>
          <p className="mt-3 text-gray-500 text-base max-w-md">
            Have a question, suggestion, or feedback? Drop us a message and
            we&apos;ll respond as soon as possible.
          </p>
        </section>

        {/* Form Section */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="max-w-xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
