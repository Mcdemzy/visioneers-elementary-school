import { Camera } from "lucide-react";
import DoubleLine from "../Shared/DoubleLine";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "../Shared/NewsLetter";
import { useState } from "react";
export default function Admission() {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    setSelectedClasses((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };
  const [formData, setFormData] = useState({
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
  });
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePicture(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      ...formData,
      profilePicture, // this is a File object
      selectedClass: selectedClasses,
    };
    console.log("Payload:", payload);
  };
  return (
    <>
      <Navbar />
      <section className=" pt-28  items-center justify-between px-10 md:px-20 lg:px-28">
        <div className=" m-auto w-full lg:w-[90%]">
          <h1 className="text-wrap flex gap-x-1.5 justify-center items-center font-Inter text-md md:text-[34px] font-bold leading-[29.05px]">
            Application For <p className="text-primary">Admission</p>
          </h1>
          <DoubleLine />
          <h2 className="mt-6 text-[#333333] flex gap-x-1.5 justify-center items-center font-Inter text-sm md:text-[27px] font-bold leading-[29.05px]">
            Registeration Form
          </h2>
          <form action="">
            {/* wd can comment out the profile picture if we dont need it */}
            {/* profile pic */}
            {/* <div className="w-full flex justify-end">
              <div className="my-5 flex items-center justify-center w-[220px] md:w-[280px] h-[220px] md:h-[280px] border border-[#6B6B6B] rounded-md">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className="rounded-full border w-[50px] md:w-[100px] h-[50px] md:h-[100px] border-[#333333] flex justify-center items-center">
                      <Camera
                        className="w-[30px] md:w-[40px] h-[24px] md:h-[32px]"
                        color="#333333"
                      />
                    </div>
                    <p className="mb-2 text-md md:text-[20px] text-center font-semibold mt-5  text-[#333333]">
                      UPLOAD PASSPORT PHOTOGRAPH HERE
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div> */}
            <div className="w-full flex justify-end">
              <div className="my-5 flex items-center justify-center w-[220px] md:w-[280px] h-[220px] md:h-[280px] border border-[#6B6B6B] rounded-md relative overflow-hidden">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <div className="rounded-full border w-[50px] md:w-[100px] h-[50px] md:h-[100px] border-[#333333] flex justify-center items-center">
                        <Camera
                          className="w-[30px] md:w-[40px] h-[24px] md:h-[32px]"
                          color="#333333"
                        />
                      </div>
                      <p className="mb-2 text-md md:text-[20px] text-center font-semibold mt-5 text-[#333333]">
                        UPLOAD PASSPORT PHOTOGRAPH HERE
                      </p>
                    </div>
                  )}
                  <input
                    id="dropzone-file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
            {/* inputs */}

            <div className=" mx-auto rounded-lg ">
              {/* Full Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="fullName"
                  className="block text-md font-medium text-black mb-1"
                >
                  Full Name <span className="text-[#821528]">*</span>
                </label>

                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Last Name                                                                                        First Name                                                                                                                      Other Name(s)"
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Gender, DOB, Religion */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Gender <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dob"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Date of Birth <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="religion"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Religion <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    required
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Father's Name and Occupation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="fatherName"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Father's Name <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="occupation"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Occupation <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    required
                    value={formData.occupation}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* place of work and telephone number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="placeOfWork"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Place of Work <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="placeOfWork"
                    required
                    value={formData.placeOfWork}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Telephone Number <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* home address and tel number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="homeAddress"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Home Address <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="homeAddress"
                    required
                    value={formData.homeAddress}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Telephone Number <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* mothers name and occupation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="mothersName"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Mother's Name<span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="mothersName"
                    required
                    value={formData.mothersName}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Occupation <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="mothersOccupation"
                    value={formData.mothersOccupation}
                    onChange={handleChange}
                    required
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* place of work and telephone number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Place of Work<span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="placeOfWork2"
                    required
                    value={formData.placeOfWork2}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Telephone Number <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* home address and telephone number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Home Address<span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="homeAddress"
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Telephone Number <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* total number of chiildren and position */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Total Number of Children in the Family
                    <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="number"
                    id="totalNumber"
                    required
                    value={formData.totalNumber}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Postion of Child in the Family{" "}
                    <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* first language */}
              <div className="mb-6">
                <label
                  htmlFor="firstLanguage"
                  className="block text-md font-medium text-black mb-1"
                >
                  First Language <span className="text-[#821528]">*</span>
                </label>

                <input
                  type="text"
                  id="firstLanguage"
                  placeholder=""
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* previous school attended with years  */}
              <div className="mb-6">
                <label
                  htmlFor="previousSchool"
                  className="block text-md font-medium text-black mb-1"
                >
                  Previous School(s) Attended with Years
                  <span className="text-[#821528]">*</span>
                </label>

                <input
                  type="text"
                  id="previousSchool"
                  placeholder=""
                  required
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* who picks */}
              <div className="mb-6">
                <label
                  htmlFor="previousSchool"
                  className="block text-md font-medium text-black mb-1"
                >
                  Who Picks the child after closing?
                  <span className="text-[#821528]">*</span>
                </label>

                <input
                  type="text"
                  id="whoPicks"
                  placeholder=""
                  required
                  value={formData.whoPicks}
                  onChange={handleChange}
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Class to which admission is sought, please tick appropriate box * */}
              <div className="mb-6">
                <label
                  htmlFor="previousSchool"
                  className="block text-md font-medium text-black mb-1"
                >
                  Class to which admission is sought, please tick appropriate
                  <span className="text-[#821528]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Day Care */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="dayCare"
                      onChange={handleCheckboxChange}
                      className="w-7 h-7 text-primary border-gray-300 rounded focus:ring-primary "
                    />
                    <label
                      htmlFor="dayCare"
                      className="ml-2 text-md font-[500] text-[#333333]"
                    >
                      Day Care
                    </label>
                  </div>

                  {/* Nursery */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="nursery"
                      onChange={handleCheckboxChange}
                      className="w-7 h-7 text-primary  border-gray-300 rounded focus:ring-primary "
                    />
                    <label
                      htmlFor="nursery"
                      className="ml-2 text-md font-[500] text-[#333333]"
                    >
                      Nursery
                    </label>
                  </div>
                  {/* Primary */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="primary"
                      onChange={handleCheckboxChange}
                      className="w-7 h-7 text-primary  border-gray-300 rounded focus:ring-primary "
                    />
                    <label
                      htmlFor="primary"
                      className="ml-2 text-md font-[500] text-[#333333]"
                    >
                      Primary
                    </label>
                  </div>
                </div>
              </div>

              {/* childs heath */}
              <div className="mb-6">
                <label
                  htmlFor="previousSchool"
                  className="block text-md font-medium text-black mb-1"
                >
                  The child’s health (good/fair/poor)
                  <span className="text-[#821528]">*</span>
                </label>

                <input
                  type="text"
                  id="health"
                  placeholder=""
                  required
                  value={formData.health}
                  onChange={handleChange}
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* admitted? */}
              <div className="mb-6">
                <label
                  htmlFor="admitted"
                  className="block text-md font-medium text-black mb-1"
                >
                  Has your child ever been admitted as an inpatient into a
                  hospital? Yes/No<span className="text-[#821528]">*</span>
                </label>

                <input
                  type="text"
                  id="admitted"
                  placeholder=""
                  required
                  value={formData.admitted}
                  onChange={handleChange}
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* routine */}
              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="block text-md font-medium text-black mb-1"
                >
                  Please indicate routine ailment of child
                  <span className="text-[#821528]">*</span>
                </label>

                <input
                  type="text"
                  id="routine"
                  placeholder=""
                  required
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/*  */}
              <h2 className="mt-4 mb-6 text-[#333333] flex gap-x-1.5 justify-center items-center font-Inter text-[18px] font-bold leading-[29.05px]">
                IMMUNIZATION OBTAINED WITH DATES
              </h2>
              {/* a */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    (a) <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="immunizationA"
                    value={formData.immunizationA}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="occupation"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Dates <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="date"
                    id="dates"
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* b */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    (b) <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="immunizationB"
                    value={formData.immunizationB}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="occupation"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Dates <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="date"
                    id="dates"
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* c */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    (c) <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="immunizationC"
                    value={formData.immunizationC}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="occupation"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Dates <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="date"
                    id="dates"
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* d */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    (d) <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="immunizationD"
                    value={formData.immunizationD}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="occupation"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Dates <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="date"
                    id="dates"
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              {/* allergies */}
              <div className="mb-6">
                <label
                  htmlFor="allergies"
                  className="block text-md font-medium text-black mb-1"
                >
                  Any allergies e.g Food, Medicine, etc
                  <span className="text-[#821528]">*</span>
                </label>

                <input
                  type="text"
                  id="allergies"
                  placeholder=""
                  required
                  value={formData.allergies}
                  onChange={handleChange}
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* childs hospital */}
              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="block text-md font-medium text-black mb-1"
                >
                  Name of Child’s Family Hospital
                  <span className="text-[#821528]">*</span>
                </label>

                <input
                  type="text"
                  id="childsHospital"
                  placeholder=""
                  required
                  value={formData.childsHospital}
                  onChange={handleChange}
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Name of the Doctor<span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block text-md font-medium text-black mb-1"
                  >
                    Telephone Number <span className="text-[#821528]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    value={formData.docNumber}
                    onChange={handleChange}
                    className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="block text-md font-medium text-black mb-1"
                >
                  If there are any other relevant details of your child’s
                  medical history not covered by the above question(s), please
                  give details<span className="text-[#821528]">*</span>
                </label>

                <textarea
                  rows={4}
                  cols={3}
                  id="details"
                  value={formData.details}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      details: e.target.value,
                    }))
                  }
                  placeholder=""
                  required
                  className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="text-white  p-2 mb-6 bg-[#8D0E4E] w-full rounded-md text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}
