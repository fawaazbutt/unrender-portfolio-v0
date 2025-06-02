"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Play,
  MessageCircle,
  Linkedin,
  Target,
  Instagram,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

// Sample video data
const videos = [
  {
    id: 1,
    title: "Youtube Cash Cow",
    thumbnail: "/pic5.png?height=200&width=300",
    youtubeId: "i7w1tPqg5MQ",
    category: "Yt Automation",
    description: "A complete sample of faceless cash cow video for youtube automation",
  },
  {
    id: 2,
    title: "Commercial Video Ad",
    thumbnail: "/pic4 (2).png?height=200&width=300",
    youtubeId: "8z_OYZ98YkU",
    category: "Ad Video",
    description: "A Commercial Video advertisement for Imtiaz Mall",
  },
  {
    id: 3,
    title: "Faceless Cash Cow Video",
    thumbnail: "/pic2.jpeg?height=200&width=300",
    youtubeId: "2XhD_3X2dEU",
    category: "Yt Automation",
    description: "A faceless cash cow Biographical story video with captions ",
  },
  {
    id: 4,
    title: "Short Caption Video",
    thumbnail: "/pic3.png?height=200&width=300",
    youtubeId: "Zzm9xVmkwNQ",
    category: "Social Media",
    description: "Ai Avatar explainer video with Captions for corporate services",
  },
  {
    id: 5,
    title: "Prayer video",
    thumbnail: "/pic1.jpg?height=200&width=300",
    youtubeId: "7UP1F3ET8sE",
    category: "Social Media",
    description: "A captionated quote video",
  },
 
  {
    id: 6,
    title: "Mars Storytelling Video",
    thumbnail: "/pic6.png?height=200&width=300",
    youtubeId: "fBVPaC_Swr8",
    category: "Storytelling",
    description: "A documentary style video about the Mars Plan",
  },
];

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/923390147472",
    color:
      "text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/fawaazbutt",
    color:
      "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/fawaz-butt-216894301",
    color:
      "text-blue-700 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400",
  },
  {
    name: "Fiverr",
    icon: Target,
    url: "https://www.fiverr.com/s/gDzWar",
    color:
      "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300",
  },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(
    null
  );
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto p-4 lg:p-6">
        <div className="grid lg:grid-cols-12 gap-6 min-h-screen">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <Card className="sticky top-6 border-green-200 dark:border-green-800 shadow-lg dark:bg-gray-800 transition-colors duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl font-bold">
                  <img
                    src="/profilepic.png"
                    alt="Fawaz Butt"
                    className="mt-[15px]"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">
                  Fawaz Butt
                </CardTitle>
                <p className="text-green-600 dark:text-green-300 font-medium">
                  Creative Director
                </p>
                <Badge
                  variant="secondary"
                  className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 w-fit mx-auto"
                >
                  Unrender Studio
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-3">
                    Connect With Me
                  </h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 hover:rotate-12 ${social.color}`}
                          title={social.name}
                        >
                          <IconComponent className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-green-700 dark:text-green-300">
                    <Phone className="w-4 h-4" />
                    <span>+92 339 0147472</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-green-700 dark:text-green-300">
                    <Mail className="w-4 h-4" />
                    <span>fawaazbutt@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-green-700 dark:text-green-300">
                    <MapPin className="w-4 h-4" />
                    <span>Islamabad, PK</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            <Card className="border-green-200 dark:border-green-800 shadow-lg dark:bg-gray-800 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold text-green-800 dark:text-green-400">
                      Unrender Studio
                    </CardTitle>
                    <p className="text-green-600 dark:text-green-300 mt-1">
                      Creative Video Production & Animation
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <Badge
                      variant="outline"
                      className="border-green-300 dark:border-green-700 text-green-700 dark:text-green-300"
                    >
                      Portfolio 2024
                    </Badge> */}
                    <ThemeToggle />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="work" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-green-100 dark:bg-gray-700">
                    <TabsTrigger
                      value="work"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white dark:data-[state=active]:bg-green-500"
                    >
                      Work
                    </TabsTrigger>
                    <TabsTrigger
                      value="about"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white dark:data-[state=active]:bg-green-500"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger
                      value="contact"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white dark:data-[state=active]:bg-green-500"
                    >
                      Contact
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="work" className="mt-6">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {videos.map((video) => (
                        <Dialog key={video.id}>
                          <DialogTrigger asChild>
                            <Card className="cursor-pointer hover:shadow-lg transition-shadow border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-600 dark:bg-gray-800">
                              <div className="relative">
                                <img
                                  src={video.thumbnail || "/placeholder.svg"}
                                  alt={video.title}
                                  className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-t-lg">
                                  <Play className="w-12 h-12 text-white" />
                                </div>
                                <Badge className="absolute top-2 right-2 bg-green-600">
                                  {video.category}
                                </Badge>
                              </div>
                              <CardContent className="p-4">
                                <h3 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                                  {video.title}
                                </h3>
                                <p className="text-sm text-green-600 dark:text-green-300">
                                  {video.description}
                                </p>
                              </CardContent>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl dark:bg-gray-800 dark:border-green-800">
                            <DialogHeader>
                              <DialogTitle className="text-green-800 dark:text-green-400">
                                {video.title}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="aspect-video">
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                              ></iframe>
                            </div>
                            <p className="text-green-700 dark:text-green-300 mt-4">
                              {video.description}
                            </p>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="about" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-4">
                          About Unrender Studio
                        </h2>
                        <div className="prose prose-green max-w-none">
                          <p className="text-green-700 dark:text-green-300 leading-relaxed mb-4">
                            Hi, I'm <strong>Fawaz Butt</strong>, a passionate
                            video editor specializing in YouTube content. I am
                            running <strong>Unrender Studios</strong> where we
                            transform raw footage into engaging and polished
                            videos. My goal is to bring your vision to life,
                            ensuring every frame tells a compelling story.
                            Whether it’s vlogs, tutorials, or product reviews, I
                            meticulously edit each video to match the style and
                            tone you want to convey. I have a deep understanding
                            of the YouTube platform, optimizing video flow and
                            engagement to keep viewers hooked from start to
                            finish. From dynamic cuts and creative transitions
                            to the perfect color grade, I ensure every video is
                            visually stunning and impactful.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-green-200 dark:border-green-800 dark:bg-gray-700">
                          <CardHeader>
                            <CardTitle className="text-green-800 dark:text-green-400">
                              Our Services
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-green-700 dark:text-green-300">
                              <li>• Explainer Videos</li>
                              <li>• Social Media Content</li>
                              <li>• Product Visualization</li>
                              <li>• Youtube Automation</li>
                              <li>• Subtitles and Captions</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border-green-200 dark:border-green-800 dark:bg-gray-700">
                          <CardHeader>
                            <CardTitle className="text-green-800 dark:text-green-400">
                              Why Choose Us
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-green-700 dark:text-green-300">
                              <li>• Creative Excellence</li>
                              <li>• Timely Delivery</li>
                              <li>• Competitive Pricing</li>
                              <li>• 24/7 Support</li>
                              <li>• Unlimited Revisions</li>
                              <li>• 100% Satisfaction Guarantee</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="contact" className="mt-6">
                    <div className="grid lg:grid-cols-2 gap-8 h-full">
                      <div className=" flex flex-col justify-between">
                        <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">
                          Get In Touch
                        </h2>
                        <div className="space-y-6 h-[300px] ">
                          <Card className="border-green-200 h-full  dark:border-green-800 dark:bg-gray-700">
                            <CardContent className="p-6">
                              <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <p className="font-semibold text-green-800 dark:text-green-400">
                                      Phone
                                    </p>
                                    <p className="text-green-600 dark:text-green-300">
                                      +92 339 0147472
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <p className="font-semibold text-green-800 dark:text-green-400">
                                      Email
                                    </p>
                                    <p className="text-green-600 dark:text-green-300">
                                      fawaazbutt@gmail.com
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <p className="font-semibold text-green-800 dark:text-green-400">
                                      Location
                                    </p>
                                    <p className="text-green-600 dark:text-green-300">
                                      Islamabad, PK
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">
                          Find Us
                        </h3>
                        <div className="rounded-lg overflow-hidden border-2 border-green-200 dark:border-green-800">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.9905135528!2d72.75644339582654!3d33.61625094098397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1748883701659!5m2!1sen!2s"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
