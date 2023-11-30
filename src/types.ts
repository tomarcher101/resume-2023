type NavLink = {
  id: string;
  title: string;
  href: string;
};

type Technology = {
  name: string;
  icon: string;
};

type Experience = {
  title: string;
  companyName: string;
  link: string;
  icon: string;
  iconBg: string;
  iconClass: string;
  date: string;
  points: string[];
};

type Project = {
  name: string;
  link?: string;
  client?: string;
  clientLink?: string;
  description: string;
  imageType: "mobile" | "desktop";
  images: string[];
  tags: string[];
};

export type { NavLink, Technology, Experience, Project };
