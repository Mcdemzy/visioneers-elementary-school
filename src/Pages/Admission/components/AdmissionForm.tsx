import { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../../../types/admission";
import ProfilePictureUpload from "./ProfilePictureUpload";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import ClassSelection from "./ClassSelection";
import ImmunizationSection from "./ImmunizationSection";

export default function AdmissionForm() {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    gender: "",
    dob: "",
    religion: "",
    fatherName: "",
    occupation: "",
    placeOfWork: "",
    telephone: "",
    homeAddress: "",
    mothersName: "",
    mothersOccupation: "",
    placeOfWork2: "",
    totalNumber: "",
    position: "",
    previousSchool: "",
    whoPicks: "",
    health: "",
    admitted: "",
    immunizationA: "",
    immunizationB: "",
    immunizationC: "",
    immunizationD: "",
    allergies: "",
    childsHospital: "",
    doctor: "",
    docNumber: "",
    details: "",
    firstLanguage: "",
    routine: "",
  });
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setSelectedClasses((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePicture(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      profilePicture,
      selectedClass: selectedClasses,
    };
    console.log("Payload:", payload);
  };

  return (
    <div className="mx-auto rounded-lg">
      <ProfilePictureUpload
        previewUrl={previewUrl}
        onImageChange={handleImageChange}
      />

      <form onSubmit={handleSubmit}>
        <FormInput
          id="fullName"
          label="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Last Name                                                                                        First Name                                                                                                                      Other Name(s)"
          className="mb-6"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <FormInput
            id="gender"
            label="Gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
          <FormInput
            id="dob"
            label="Date of Birth"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <FormInput
            id="religion"
            label="Religion"
            value={formData.religion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <FormInput
            id="fatherName"
            label="Father's Name"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
          <FormInput
            id="occupation"
            label="Occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <FormInput
            id="placeOfWork"
            label="Place of Work"
            value={formData.placeOfWork}
            onChange={handleChange}
            required
          />
          <FormInput
            id="telephone"
            label="Telephone Number"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <FormInput
            id="homeAddress"
            label="Home Address"
            value={formData.homeAddress}
            onChange={handleChange}
            required
          />
          <FormInput
            id="telephone2"
            label="Telephone Number"
            type="tel"
            value=""
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <FormInput
            id="mothersName"
            label="Mother's Name"
            value={formData.mothersName}
            onChange={handleChange}
            required
          />
          <FormInput
            id="mothersOccupation"
            label="Occupation"
            value={formData.mothersOccupation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <FormInput
            id="placeOfWork2"
            label="Place of Work"
            value={formData.placeOfWork2}
            onChange={handleChange}
            required
          />
          <FormInput
            id="motherTel"
            label="Telephone Number"
            type="tel"
            value=""
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <FormInput
            id="motherAddress"
            label="Home Address"
            value=""
            onChange={handleChange}
          />
          <FormInput
            id="motherTel2"
            label="Telephone Number"
            type="tel"
            value=""
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <FormInput
            id="totalNumber"
            label="Total Number of Children in the Family"
            type="number"
            value={formData.totalNumber}
            onChange={handleChange}
            required
          />
          <FormInput
            id="position"
            label="Position of Child in the Family"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>

        <FormInput
          id="firstLanguage"
          label="First Language"
          value={formData.firstLanguage}
          onChange={handleChange}
          className="mb-6"
        />

        <FormInput
          id="previousSchool"
          label="Previous School(s) Attended with Years"
          value={formData.previousSchool}
          onChange={handleChange}
          required
          className="mb-6"
        />

        <FormInput
          id="whoPicks"
          label="Who Picks the child after closing?"
          value={formData.whoPicks}
          onChange={handleChange}
          required
          className="mb-6"
        />

        <ClassSelection
          selectedClasses={selectedClasses}
          onChange={handleCheckboxChange}
        />

        <FormInput
          id="health"
          label="The child's health (good/fair/poor)"
          value={formData.health}
          onChange={handleChange}
          required
          className="mb-6"
        />

        <FormInput
          id="admitted"
          label="Has your child ever been admitted as an inpatient into a hospital? Yes/No"
          value={formData.admitted}
          onChange={handleChange}
          required
          className="mb-6"
        />

        <FormInput
          id="routine"
          label="Please indicate routine ailment of child"
          value={formData.routine}
          onChange={handleChange}
          required
          className="mb-6"
        />

        <ImmunizationSection formData={formData} onChange={handleChange} />

        <FormInput
          id="allergies"
          label="Any allergies e.g Food, Medicine, etc"
          value={formData.allergies}
          onChange={handleChange}
          required
          className="mb-6"
        />

        <FormInput
          id="childsHospital"
          label="Name of Child's Family Hospital"
          value={formData.childsHospital}
          onChange={handleChange}
          required
          className="mb-6"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <FormInput
            id="doctor"
            label="Name of the Doctor"
            value={formData.doctor}
            onChange={handleChange}
          />
          <FormInput
            id="docNumber"
            label="Telephone Number"
            type="tel"
            value={formData.docNumber}
            onChange={handleChange}
          />
        </div>

        <FormTextarea
          id="details"
          label="If there are any other relevant details of your child's medical history not covered by the above question(s), please give details"
          value={formData.details}
          onChange={handleTextareaChange}
          required
        />

        <button
          disabled
          type="submit"
          className="text-white p-2 mb-6 bg-gray-200 w-full rounded-md text-center cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
