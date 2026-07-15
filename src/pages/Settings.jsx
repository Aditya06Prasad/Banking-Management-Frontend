import { useState } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Settings = () => {
  const [formData, setFormData] = useState({
    fullName: "Aditya Chandravanshi",
    email: "Prasadaditya553@gmail.com",
    phoneNumber: "9563258741",
  });

  const [profilePic, setProfilePic] = useState(null);

  const [success, setSuccess] = useState("");

  const [password, setPassword] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: "",
  });

  const [passError, setPassError] = useState("");

  const [passSuccess, setPassSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    setSuccess("");
  };

  const handleProfilePic = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const imageURL = URL.createObjectURL(selectedImage);

      setProfilePic(imageURL);
      setSuccess("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("Profile updated successfully.");
  };

  const handlePassChange = (e) => {
    setPassword({
      ...password,
      [e.target.id]: e.target.value,
    });

    setPassError("");
    setPassSuccess("");
  };

  const handlePassSubmit = (e) => {
    e.preventDefault();

    if (
      !password.currentPass ||
      !password.newPass ||
      !password.confirmPass
    ) {
      setPassError("All password fields are required.");
      return;
    }

    if (password.newPass.length < 8) {
      setPassError(
        "New password must contain at least 8 characters."
      );
      return;
    }

    if (password.newPass !== password.confirmPass) {
      setPassError(
        "New password and confirm password do not match."
      );
      return;
    }

    setPassError("");

    setPassSuccess("Password updated successfully.");

    setPassword({
      currentPass: "",
      newPass: "",
      confirmPass: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Settings
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your profile and account preferences.
          </p>

          {/* Profile Settings Form */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-3xl rounded-xl bg-white p-6 shadow-sm"
          >
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Profile Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update your profile picture and personal information.
              </p>
            </div>

            {/* Profile Picture */}

            <div className="mt-6 flex flex-col gap-5 border-b border-gray-200 pb-6 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-100 text-3xl font-semibold text-blue-600">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  "AC"
                )}
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Profile Picture
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Upload a JPG or PNG image.
                </p>

                <label className="mt-3 inline-block cursor-pointer rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-50">
                  Choose Image

                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleProfilePic}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Profile Inputs */}

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <InputField
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />

              <InputField
                id="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                id="phoneNumber"
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            {success && (
              <p className="mt-5 rounded-lg bg-green-100 px-4 py-3 text-green-700">
                {success}
              </p>
            )}

            <div className="mt-6 flex justify-end">
              <Button
                type="submit"
                text="Save Changes"
              />
            </div>
          </form>

          {/* Security Settings Form */}

          <form
            onSubmit={handlePassSubmit}
            className="mt-8 max-w-3xl rounded-xl bg-white p-6 shadow-sm"
          >
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Security Settings
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update your account password.
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <InputField
                id="currentPass"
                label="Current Password"
                type="password"
                placeholder="Enter your current password"
                value={password.currentPass}
                onChange={handlePassChange}
              />

              <InputField
                id="newPass"
                label="New Password"
                type="password"
                placeholder="Enter a new password"
                value={password.newPass}
                onChange={handlePassChange}
              />

              <InputField
                id="confirmPass"
                label="Confirm New Password"
                type="password"
                placeholder="Confirm your new password"
                value={password.confirmPass}
                onChange={handlePassChange}
              />
            </div>

            {passError && (
              <p className="mt-5 rounded-lg bg-red-100 px-4 py-3 text-red-700">
                {passError}
              </p>
            )}

            {passSuccess && (
              <p className="mt-5 rounded-lg bg-green-100 px-4 py-3 text-green-700">
                {passSuccess}
              </p>
            )}

            <div className="mt-6 flex justify-end">
              <Button
                type="submit"
                text="Update Password"
              />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Settings;