'use client';

import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ConditionalFieldsProps {
  category: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const ConditionalFields: React.FC<ConditionalFieldsProps> = ({ category, register, errors }) => {
  const textField = (name: string, label: string, placeholder?: string) => (
    <FormField
      key={name}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>{label} <span className="text-red-500">*</span></FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...register(name)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const textareaField = (name: string, label: string, placeholder?: string) => (
    <FormField
      key={name}
      name={name}
      render={() => (
        <FormItem className="md:col-span-2">
          <FormLabel>{label} <span className="text-red-500">*</span></FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...register(name)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const pdfField = (name: string, label: string) => (
    <FormField
      key={name}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>{label} <span className="text-red-500">*</span></FormLabel>
          <FormControl>
            <div className="relative w-full">
              <input
                type="file"
                accept="application/pdf"
                {...register(name)}
                className="block w-full text-sm text-gray-900 border border-input rounded-md bg-white file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-0 file:rounded-l-md file:px-4 file:py-2 file:cursor-pointer"
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const fields: Record<string, React.ReactElement[]> = {
    'Provisional Registration': [
      pdfField('pr_bds_upload', 'Provisional BDS Certificate (PR)'),
      pdfField('pr_bonafide_upload', 'Upload College Bonafide Certificate (PR)'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
      pdfField('custodian_clg', 'College Custodian'),
    ],
    'Bachelor of Dental Surgery (BDS) from Telangana': [
      textField('professional_address', 'Professional Address (for Clinicians)'),
      textareaField('qualification_description', 'Description of Qualification/s'),
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('intern_upload', 'Internship Certificate'),
      pdfField('pr_certificate_upload', 'TDC Provisional Registration Certificate'),
      pdfField('bds_affidavit_upload', 'Affidavit'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
      pdfField('custodian_clg', 'College Custodian'),
    ],
    'Transfer BDS (BDS registrant - from other state dental councils in India)': [
      textField('professional_address', 'Professional Address (for Clinicians)'),
      textareaField('qualification_description', 'Description of Qualification/s'),
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('bds_intern_upload', 'Internship Certificate'),
      pdfField('noc_dci_upload', 'NOC of DCI'),
      pdfField('transfer_noc_upload', 'NOC by Transferor State Dental Council'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
    ],
    'Transfer BDS + New MDS': [
      textField('professional_address', 'Professional Address (for Clinicians)'),
      textareaField('qualification_description', 'Description of Qualification/s'),
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('bds_intern_upload', 'Internship Certificate'),
      textField('mds_university_address', 'Name & address of the University (MDS)'),
      textField('mds_qualification_year', 'Month & year of attaining the Qualification (MDS)', 'MM/YYYY'),
      textField('mds_clg_address', 'Name & Address of College/Institution (MDS)'),
      pdfField('mds_degree_upload', 'Degree Certificate/s (MDS)'),
      pdfField('mds_bonafide_marks_upload', 'College Bonafide / Marks memo (MDS)'),
      pdfField('current_tdc_reg_certificate', 'Current TDC Registration Certificate'),
      pdfField('noc_dci_upload', 'NOC of DCI'),
      pdfField('transfer_noc_upload', 'NOC by Transferor State Dental Council'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
      pdfField('custodian_clg', 'College Custodian'),
      pdfField('mds_affidavit', 'Upload MDS Affidavit'),
    ],
    'Transfer MDS (MDS registrant - from other state dental councils in India)': [
      textField('professional_address', 'Professional Address (for Clinicians)'),
      textareaField('qualification_description', 'Description of Qualification/s'),
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('bds_intern_upload', 'Internship Certificate'),
      textField('mds_university_address', 'Name & address of the University (MDS)'),
      textField('mds_qualification_year', 'Month & year of attaining the Qualification (MDS)', 'MM/YYYY'),
      textField('mds_clg_address', 'Name & Address of College/Institution (MDS)'),
      pdfField('mds_degree_upload', 'Degree Certificate/s (MDS)'),
      pdfField('mds_bonafide_marks_upload', 'College Bonafide / Marks memo (MDS)'),
      pdfField('noc_dci_upload', 'NOC of DCI'),
      pdfField('transfer_noc_upload', 'NOC by Transferor State Dental Council'),
      pdfField('custodian_clg', 'College Custodian'),
      pdfField('ssc_memo', 'SSC Marks Memo'),
    ],
    'MDS Registration': [
      textField('bds_university_address', 'Name & address of the University (BDS)'),
      textField('bds_qualification_year', 'Month & year of attaining the Qualification (BDS)', 'MM/YYYY'),
      textField('bds_clg_address', 'Name & Address of College/Institution (BDS)'),
      pdfField('bds_degree_upload', 'Degree Certificate/s (BDS)'),
      pdfField('study_upload', 'Study/Conduct/Attempt Certificate'),
      pdfField('bds_intern_upload', 'Internship Certificate'),
      textField('mds_university_address', 'Name & address of the University (MDS)'),
      textField('mds_qualification_year', 'Month & year of attaining the Qualification (MDS)', 'MM/YYYY'),
      textField('mds_clg_address', 'Name & Address of College/Institution (MDS)'),
      pdfField('mds_degree_upload', 'Degree Certificate/s (MDS)'),
      pdfField('mds_bonafide_marks_upload', 'College Bonafide / Marks memo (MDS)'),
      pdfField('custodian_clg', 'College Custodian'),
      pdfField('current_tsddc_reg_certificate', 'Current TSDC Registration Certificate'),
      pdfField('mds_affidavit', 'Upload MDS Affidavit'),
    ],
    'Non Indian Dentist Registration (Temporary)': [
      textareaField('nid_qualification_des', 'Description of Qualification/s'),
      textField('dci_university_address', 'Name & address of the University (DCI Recognized)'),
      textField('dci_qualification_year', 'Month & year of attaining the Qualification (DCI)', 'MM/YYYY'),
      textField('dci_clg_address', 'Name & Address of College/Institution (DCI)'),
      pdfField('dci_degree_upload', 'Degree Certificate/s (DCI)'),
      pdfField('dci_bonafide_upload', 'College Bonafide Certificate/s (DCI)'),
      pdfField('current_tdc_reg_certificate', 'Current TDC Registration Certificate'),
    ],
  };

  return category && fields[category] ? (
    <>
      {fields[category]}
    </>
  ) : null;  
};

export default ConditionalFields;
