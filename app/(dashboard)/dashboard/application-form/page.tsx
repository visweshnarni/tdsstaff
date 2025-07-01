// 'use client';
// import ApplicationForm from "@/app/components/dashboard/ApplicationForm";
// // import MultiStepForm from "@/app/components/dashboard/ApplicationForm/MultiStepForm";

// export default function ApplicationFormPage() {
//   <>
//     <ApplicationForm />;
//     {/* <MultiStepForm /> */}
//   </>
// }

'use client';

import MultiStepForm from "@/app/components/dashboard/ApplicationForm/MultiStepForm";

// import ApplicationForm from "@/app/components/dashboard/ApplicationForm";

export default function ApplicationFormPage() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 pt-6 md:pl-72 max-w-screen-xl mx-auto">
      {/* <ApplicationForm /> */}
      <MultiStepForm />
    </div>
  );
}
