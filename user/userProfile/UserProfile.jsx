import React from "react";
import styles from "./UserProfile.module.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import ProfileForm from "./components/ProfileForm/ProfileForm";
import { NavigationBar } from "../../trial/dashboard/NavigationBar";
export default function UserProfile() {
  return (
    <div className={styles.container}>
      {/* Replace Navbar with NavigationBar component */}
      <NavigationBar />

      {/* Main Content */}
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>User Profile</h1>
        </header>

        <div className={styles.contentWrapper}>
          {/* Profile Card and Navigation Menu */}
          <aside className={styles.profileSection}>
            <ProfileCard
              name="Your Name"
              email="yourname@gmail.com"
              avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f5bf02e10e40deb95fa85ba8fc441aab25d124156f9d3443b3d65a2570e25fa1?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
            />
            <NavigationMenu />
          </aside>

          {/* Profile Form */}
          <section className={styles.formSection}>
            <ProfileForm />
          </section>
        </div>
      </div>
    </div>
  );
}