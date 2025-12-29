import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, UpdateUser, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();

    if (!name || !photo) {
      toast.error("Please fill all fields!");
      return;
    }

    UpdateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile updated successfully!");
        setUser({ ...user, displayName: name, photoURL: photo });
        setIsEditing(false);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-[calc(100vh-397px)] flex items-center justify-center mt-35 mb-20">
      <title>Profile | GameNexus</title>

      <div className="w-[90%] max-w-md bg-linear-to-br from-[#0f0f0f] via-[#121212] to-[#191919] backdrop-blur-xl border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_10px_#B8FF00]">
        {!isEditing ? (
          <>
            {/* Identity */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-[#B8FF00]"
              />

              <h2 className="text-2xl font-bold text-[#B8FF00]">
                {user?.displayName || "Unknown User"}
              </h2>

              <p className="text-gray-400 text-sm">{user?.email}</p>
            </div>

            {/* Account Information */}
            <div className="mt-6 space-y-3 text-sm">
              <h3 className="font-semibold text-gray-300 tracking-wide">
                Account Information
              </h3>

              <div className="flex justify-between">
                <span className="text-gray-400">Sign-in Method</span>
                <span className="text-white capitalize">
                  {user?.providerData?.[0]?.providerId.replace(".com", "") ||
                    "Email"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Email Status</span>
                <span
                  className={
                    user?.emailVerified ? "text-green-400" : "text-red-400"
                  }
                >
                  {user?.emailVerified ? "Verified" : "Not Verified"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">User ID</span>
                <span className="text-white">{user?.uid?.slice(0, 10)}...</span>
              </div>
            </div>

            {/* Activity */}
            <div className="mt-5 space-y-3 text-sm">
              <h3 className="font-semibold text-gray-300 tracking-wide">
                Activity
              </h3>

              <div className="flex justify-between">
                <span className="text-gray-400">Member Since</span>
                <span className="text-white">
                  {new Date(user?.metadata?.creationTime).toLocaleDateString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Last Login</span>
                <span className="text-white">
                  {new Date(
                    user?.metadata?.lastSignInTime
                  ).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Note */}
            <p className="mt-5 text-xs text-gray-500 text-center">
              This information is synced with your authentication provider and
              some fields cannot be edited directly.
            </p>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 w-full py-2 bg-[#B8FF00] hover:bg-[#a6e600] text-black font-semibold rounded-lg transition"
            >
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-6 text-[#B8FF00]">
              Edit Profile
            </h1>

            <form onSubmit={handleUpdateUserInfo} className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-2">Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#B8FF00]"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Profile Photo URL
                </label>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#B8FF00]"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#B8FF00] hover:bg-[#a6e600] text-black font-semibold py-3 rounded-lg transition"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
