import React from "react"
import styles from "./ProfileSidebar.module.css"
import { FaRegUser } from "react-icons/fa"
import { CgHome } from "react-icons/cg"
import { TbLogout } from "react-icons/tb"
import { MdOutlineAddBox, MdOutlineFavoriteBorder } from "react-icons/md"

import Link from "next/link"
import { useRouter } from "next/router"

function ProfileSidebar() {
  const router = useRouter()

  return (
    <div className={styles.ProfileSidebar}>
      <div className={styles.sidebar_container}>
        <div className={styles.avatar}>
          <Link href="/">
            <img
              src="https://lasvegas.wpresidence.net/wp-content/themes/wpresidence/img/default-user_1.png"
              alt=""
            />
          </Link>
          <p>Welcome back, Khald!</p>
        </div>
        <div className={styles.sidebar_nav}>
          <Link href="/profile">
            <div
              className={
                router.pathname == "/profile"
                  ? styles.side_item_active
                  : styles.side_item
              }
            >
              <FaRegUser className={styles.icon} />
              <p>My Profile</p>
            </div>
          </Link>
          <Link href="/profile/properties">
            <div
              className={
                router.pathname == "/profile/properties"
                  ? styles.side_item_active
                  : styles.side_item
              }
            >
              <CgHome className={styles.icon} />
              <p>My Properties List</p>
            </div>
          </Link>
          <Link href="/">
            <div
              className={
                router.pathname == "/"
                  ? styles.side_item_active
                  : styles.side_item
              }
            >
              <MdOutlineAddBox className={styles.icon} />
              <p>Add New Property</p>
            </div>
          </Link>
          <Link href="/">
            <div
              className={
                router.pathname == "/"
                  ? styles.side_item_active
                  : styles.side_item
              }
            >
              <MdOutlineFavoriteBorder className={styles.icon} />

              <p>Favorites</p>
            </div>
          </Link>
          <div className={styles.side_item}>
            <TbLogout className={styles.icon} />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar
