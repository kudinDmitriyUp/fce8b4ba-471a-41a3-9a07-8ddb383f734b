"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Flag, HelpCircle, Mail, Newspaper, Shield, Star, Users, Zap, Twitter, Globe } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="grid"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Latest News", id: "blog" },
            { name: "Teams", id: "team" },
            { name: "Races", id: "feature" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="F1 Racing News"
          button={{
            text: "Subscribe",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Latest F1 Racing News"
          description="Stay up-to-date with breaking Formula 1 news, race results, driver updates, team analysis, and exclusive insights from the world of motorsport"
          tag="Breaking News"
          tagIcon={Zap}
          buttons={[
            { text: "Read Latest", href: "blog" },
            { text: "Subscribe", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395411114-1tznlrgx.jpg"
          imageAlt="Formula 1 racing car speeding on track"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Your ultimate destination for Formula 1 racing news, bringing you the fastest updates, in-depth analysis, and exclusive stories from the world's premier motorsport championship"
          buttons={[
            { text: "Learn More", href: "about" },
            { text: "Follow Updates", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Race Coverage"
          description="Comprehensive Formula 1 race coverage and exclusive content"
          tag="Coverage"
          tagIcon={Flag}
          buttons={[
            { text: "View All", href: "feature" }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "Live Race Updates",
              description: "Real-time coverage of Formula 1 races with live timing, lap-by-lap commentary, and instant race results",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395411802-eqxcl3nk.jpg",
              imageAlt: "Live F1 race coverage"
            },
            {
              id: "02",
              title: "Driver Analysis",
              description: "In-depth analysis of driver performances, championship standings, and exclusive driver interviews",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395412530-85mdlvlv.jpg",
              imageAlt: "F1 driver performance analysis"
            },
            {
              id: "03",
              title: "Technical Insights",
              description: "Expert analysis of F1 car technology, aerodynamics, and technical regulations updates",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395414932-m8xyynov.jpg",
              imageAlt: "F1 technical analysis"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Latest F1 News"
          description="Breaking stories and expert analysis from the Formula 1 world"
          tag="News"
          tagIcon={Newspaper}
          buttons={[
            { text: "View All Articles", href: "blog" }
          ]}
          textboxLayout="default"
          animationType="blur-reveal"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              tags: ["Race Results", "Championship"],
              title: "Max Verstappen Dominates Monaco Grand Prix",
              excerpt: "Red Bull driver secures another commanding victory in the streets of Monte Carlo with a masterful performance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395411802-eqxcl3nk.jpg",
              imageAlt: "Monaco Grand Prix victory",
              authorName: "Sarah Mitchell",
              date: "15 Nov 2024"
            },
            {
              id: "2",
              tags: ["Team News", "Technical"],
              title: "Mercedes Unveils Major Aerodynamic Updates",
              excerpt: "The Silver Arrows reveal significant car upgrades ahead of the upcoming race weekend in Brazil",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395412530-85mdlvlv.jpg",
              imageAlt: "Mercedes F1 car updates",
              authorName: "James Rodriguez",
              date: "14 Nov 2024"
            },
            {
              id: "3",
              tags: ["Driver News", "Contract"],
              title: "Lewis Hamilton Signs Contract Extension",
              excerpt: "Seven-time world champion commits to Mercedes for another two seasons in multi-million deal",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395413298-c6gq6xgu.jpg",
              imageAlt: "Lewis Hamilton contract news",
              authorName: "Emma Thompson",
              date: "13 Nov 2024"
            },
            {
              id: "4",
              tags: ["Regulations", "FIA"],
              title: "New 2025 Technical Regulations Announced",
              excerpt: "FIA reveals significant changes to car specifications and racing rules for the upcoming season",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395414932-m8xyynov.jpg",
              imageAlt: "2025 F1 regulations",
              authorName: "Michael Chen",
              date: "12 Nov 2024"
            },
            {
              id: "5",
              tags: ["Teams", "Strategy"],
              title: "Ferrari's Championship Strategy Breakdown",
              excerpt: "Analyzing the Scuderia's tactical approach and what they need to do to challenge for the title",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395413967-y4xmhgcu.jpg",
              imageAlt: "Ferrari F1 strategy analysis",
              authorName: "David Wilson",
              date: "11 Nov 2024"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="F1 Teams 2024"
          description="Meet the constructor teams competing in Formula 1"
          tag="Teams"
          tagIcon={Users}
          buttons={[
            { text: "All Teams", href: "team" }
          ]}
          textboxLayout="default"
          animationType="scale-rotate"
          members={[
            {
              id: "1",
              name: "Red Bull Racing",
              role: "Constructor Champions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395418074-yfgdx5ny.jpg",
              imageAlt: "Red Bull Racing team",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/redbullracing" },
                { icon: Globe, url: "https://redbullracing.com" }
              ]
            },
            {
              id: "2",
              name: "Mercedes-AMG",
              role: "Silver Arrows",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395418578-aowd3abz.jpg",
              imageAlt: "Mercedes F1 team",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/mercedesamgf1" },
                { icon: Globe, url: "https://mercedes-amg-f1.com" }
              ]
            },
            {
              id: "3",
              name: "Scuderia Ferrari",
              role: "Prancing Horse",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395419329-3ofqo32i.jpg",
              imageAlt: "Ferrari F1 team",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/scuderiaferrari" },
                { icon: Globe, url: "https://ferrari.com" }
              ]
            },
            {
              id: "4",
              name: "McLaren Racing",
              role: "Papaya Power",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395420144-1slat4ix.jpg",
              imageAlt: "McLaren F1 team",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/mclarenf1" },
                { icon: Globe, url: "https://mclaren.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What F1 Fans Say"
          description="Real feedback from our passionate Formula 1 community"
          tag="Reviews"
          tagIcon={Star}
          buttons={[
            { text: "Join Community", href: "contact" }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "F1 Enthusiast",
              company: "Racing Fan Club",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395420705-s87vvluq.jpg",
              imageAlt: "Marcus Johnson, F1 fan"
            },
            {
              id: "2",
              name: "Sofia Rodriguez",
              role: "Motorsport Blogger",
              company: "Speed Chronicles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395421642-7zfbw63e.jpg",
              imageAlt: "Sofia Rodriguez, motorsport blogger"
            },
            {
              id: "3",
              name: "Alex Chen",
              role: "Racing Analyst",
              company: "F1 Insights",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395422385-0tz84lqi.jpg",
              imageAlt: "Alex Chen, racing analyst"
            },
            {
              id: "4",
              name: "Emma Williams",
              role: "F1 Journalist",
              company: "Motorsport Media",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395422879-k6gdq87q.jpg",
              imageAlt: "Emma Williams, F1 journalist"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted by F1 Community"
          description="Join thousands of Formula 1 fans and motorsport professionals who trust our coverage"
          tag="Partners"
          tagIcon={Shield}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395423480-wcpl6nly.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395424209-4cr15jew.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395424994-c6bff5xj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395425460-alnz928r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763395426011-j4htzo7i.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about F1 Racing News"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How often is the F1 news updated?",
              content: "Our team updates F1 Racing News multiple times daily during race weekends and regularly throughout the season to bring you the latest breaking news, race results, and exclusive stories."
            },
            {
              id: "2",
              title: "Do you cover all Formula 1 teams?",
              content: "Yes, we provide comprehensive coverage of all 10 Formula 1 constructor teams, including Red Bull Racing, Mercedes-AMG, Ferrari, McLaren, and all other teams on the grid."
            },
            {
              id: "3",
              title: "Can I get notifications for breaking F1 news?",
              content: "Absolutely! Subscribe to our newsletter to receive instant notifications about breaking F1 news, race results, driver updates, and exclusive content delivered directly to your inbox."
            },
            {
              id: "4",
              title: "Do you provide race weekend coverage?",
              content: "We offer complete race weekend coverage including practice sessions, qualifying results, race live updates, post-race analysis, and driver interviews from all Formula 1 Grand Prix events."
            },
            {
              id: "5",
              title: "Are your sources reliable and verified?",
              content: "Our experienced motorsport journalists work with verified sources including official F1 teams, FIA statements, driver interviews, and accredited motorsport media to ensure accurate reporting."
            },
            {
              id: "6",
              title: "Can I access historical F1 content?",
              content: "Yes, our archive contains extensive historical F1 content including past race results, championship standings, memorable moments, and in-depth analysis from previous seasons."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated with F1 Racing News"
          description="Subscribe to our newsletter for the latest Formula 1 breaking news, race results, driver updates, and exclusive motorsport insights delivered directly to your inbox"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive F1 Racing News updates and can unsubscribe at any time."
          onSubmit={null}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Content",
              items: [
                { label: "Latest News", href: "blog" },
                { label: "Race Coverage", href: "feature" },
                { label: "Team Profiles", href: "team" },
                { label: "Archives", href: "blog" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Newsletter", href: "contact" },
                { label: "F1 Fans", href: "testimonial" },
                { label: "Follow Updates", href: "contact" },
                { label: "Social Media", href: "https://twitter.com" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "About", href: "about" },
                { label: "Help Center", href: "faq" }
              ]
            }
          ]}
          logoText="F1 Racing News"
          copyrightText="© 2024 | F1 Racing News"
        />
      </div>
    </ThemeProvider>
  );
}