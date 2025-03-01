import React, { useState } from "react"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { useSelector } from "react-redux"
import styles from "./ProfilePage.module.css"

function ProfilePage() {
  const [seePassOne, setSeePassOne] = useState("password")
  const [seePassTwo, setSeePassTwo] = useState("password")
  const [seePassThree, setSeePassThree] = useState("password")

  const user = useSelector((state) => state.auth.user)

  console.log(user)

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.welcome}>
        <p>Welcome</p>
        <h1>Dashboard – Profile Page</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.cont_info_block}>
          <p>Contact Information</p>
          <div className={styles.cont_inputs}>
            <div className={styles.input_item}>
              <label for="firstname">First Name</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label for="lastname">Last Name</label>
              <input type="text" />
            </div>
            <div className={styles.input_item}>
              <label for="email">Email Address</label>
              <input type="email" />
            </div>
            <div className={styles.input_item}>
              <label for="phonenumber">Phone Number</label>
              <input type="tel" />
            </div>
          </div>
          <div className={styles.cont_buttons}>
            <button>Update Profile</button>
            <button>Delete Profile</button>
          </div>
        </div>
        <div className={styles.cont_info_block}>
          <p>Change Password</p>
          <div className={styles.cont_inputs}>
            <div className={styles.first_pass_input}>
              <label for="oldpassword">Old Password</label>
              <input type={seePassOne} />
              {seePassOne === "password" ? (
                <BsEyeSlash
                  className={styles.eye}
                  onClick={(e) => setSeePassOne("text")}
                />
              ) : (
                <BsEye
                  className={styles.eye}
                  onClick={(e) => setSeePassOne("password")}
                />
              )}
            </div>
            <div className={styles.input_item}>
              <label for="newpassword">New Password</label>
              <input type={seePassTwo} />
              {seePassTwo === "password" ? (
                <BsEyeSlash
                  className={styles.eye}
                  onClick={(e) => setSeePassTwo("text")}
                />
              ) : (
                <BsEye
                  className={styles.eye}
                  onClick={(e) => setSeePassTwo("password")}
                />
              )}
            </div>
            <div className={styles.input_item}>
              <label for="confirmpassword">Confirm New Password</label>
              <input type={seePassThree} />
              {seePassThree === "password" ? (
                <BsEyeSlash
                  className={styles.eye}
                  onClick={(e) => setSeePassThree("text")}
                />
              ) : (
                <BsEye
                  className={styles.eye}
                  onClick={(e) => setSeePassThree("password")}
                />
              )}
            </div>
          </div>
          <div className={styles.cont_buttons}>
            <button>Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
