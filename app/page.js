"use client";

import ClientsSection from "@/components/ClientsSection";
import Design from "@/components/Design";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SeoSemSection from "@/components/SeoSemSection";
import Services from "@/components/Services";
import SocialMedia from "@/components/SocialMedia";
import VideoEditing from "@/components/VideoEditing";
import WebDevelopmentSection from "@/components/WebDevelopmentSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WebDevelopmentSection />
      <SeoSemSection />
      <SocialMedia />
      <VideoEditing />
      <Design />
      <Email />
      <ClientsSection />
      <Footer />
    </>
  );
}
