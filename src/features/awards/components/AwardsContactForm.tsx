import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormSchema,
  type ContactFormFields,
} from "../schemas/contactForm.schema";
import { FormField } from "../../../components/FormField";

export function AwardsContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
  });

  async function onSubmit(data: ContactFormFields) {
    return data;
  }

  return (
    <section className="grid lg:grid-cols-2 px-5 md:px-10 xl:px-14 pb-10">
      <div
        className="
          relative flex flex-col justify-start
          min-h-[30vh]
          px-4 py-12 md:px-10 xl:px-14
          bg-cover bg-center
          rounded-t-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl lg:rounded-tr-none
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.1)), url('/global-search-awards.avif')",
        }}
      >
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold  uppercase">
          Ready to own your category?
        </h2>
        <p className="mt-6 text-white/80 text-md lg:text-base max-w-md">
          Search is changing. You need a strategy that wins on Google today and
          establishes your authority for AI tomorrow. Fill out the form, and
          let's build the future-proof roadmap your business deserves.
        </p>
      </div>

      <div className="bg-brand-dark px-4 py-12 md:px-10 xl:px-14 rounded-b-3xl lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-bl-none font-light">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              label="First name"
              id="firstName"
              registration={register("firstName")}
              errorMessage={errors.firstName?.message}
              required
            />
            <FormField
              label="Last name"
              id="lastName"
              registration={register("lastName")}
              errorMessage={errors.lastName?.message}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              label="Email"
              id="email"
              type="email"
              registration={register("email")}
              errorMessage={errors.email?.message}
              required
            />
            <FormField
              label="Phone number"
              id="phone"
              type="tel"
              registration={register("phone")}
              errorMessage={errors.phone?.message}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              label="Company name"
              id="company"
              registration={register("company")}
              errorMessage={errors.company?.message}
              required
            />
            <FormField
              label="Business type"
              id="businessType"
              registration={register("businessType")}
              errorMessage={errors.businessType?.message}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="country"
              className="text-white text-sm lg:text-base"
            >
              Country <span className="text-white">*</span>
            </label>
            <select
              id="country"
              {...register("country")}
              className="
                w-full rounded-2xl border border-white bg-transparent
                px-5 py-3 text-white text-sm lg:text-base appearance-none
                focus:outline-none focus:border-brand-slime
                transition 
              "
            >
              <option value="" className="text-brand-dark">
                Select a country
              </option>
              <option value="ie" className="text-brand-dark">
                Ireland
              </option>
              <option value="uk" className="text-brand-dark">
                United Kingdom
              </option>
              <option value="eu" className="text-brand-dark">
                Rest of Europe
              </option>
              <option value="us" className="text-brand-dark">
                United States of America
              </option>
              <option value="other" className="text-brand-dark">
                Other
              </option>
            </select>
            {errors.country && (
              <p className="text-white/50 text-xs">{errors.country.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-white text-sm lg:text-base"
            >
              Message <span className="text-white">*</span>
            </label>
            <textarea
              id="message"
              {...register("message")}
              style={{ minHeight: "80px" }}
              className=" 
                w-full rounded-2xl border border-white bg-transparent
                px-5 py-3 text-white text-sm lg:text-base resize-y
                focus:outline-none focus:border-brand-slime
                transition
              "
            />
            {errors.message && (
              <p className="text-white/50 text-xs">{errors.message.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-start">
            <FormField
              label="How did you hear about us?"
              id="referral"
              registration={register("referral")}
              errorMessage={errors.referral?.message}
              required
            />

            <div className="flex items-start gap-3 sm:pt-7">
              <input
                id="newsletter"
                type="checkbox"
                {...register("newsletter")}
                className="mt-0.5 h-4 w-4 shrink-0 rounded accent-brand-slime cursor-pointer"
              />
              <label
                htmlFor="newsletter"
                className="text-white text-sm lg:text-base cursor-pointer"
              >
                I want also to subscribe to your newsletter and receive email
                communication.
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full items-center rounded-full
                bg-brand-slime text-brand-dark
                px-8 py-3 text-base font-medium
                hover:brightness-95 transition
                disabled:opacity-60 hover:cursor-pointer
              "
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
