import { Award, Clock, Heart, Shield, Target, Truck } from "lucide-react"

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#EEDDD5] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About ParcelPioneer</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            We are on a mission to revolutionize parcel delivery with speed, reliability, and exceptional customer
            service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://pathao.com/wp-content/uploads/2018/12/BS9A9999-copy.jpg"
                alt="Our Story"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                ParcelPioneer was founded in 20205 with a simple goal: to make parcel delivery faster, more reliable, and
                stress-free for everyone in Bangladesh.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small operation in Dhaka has quickly grown into a trusted delivery service covering
                multiple areas, with plans for nationwide expansion.
              </p>
              <p className="text-gray-700">
                Our team of dedicated professionals works tirelessly to ensure that every package reaches its
                destination safely and on time, no matter the circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="text-amber-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Punctuality</h3>
              <p className="text-gray-600">
                We understand the value of time and commit to delivering your parcels exactly when promised.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-amber-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Security</h3>
              <p className="text-gray-600">
                Your parcels safety is our top priority. We handle each package with the utmost care and security.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="text-amber-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Customer First</h3>
              <p className="text-gray-600">
                We put our customers at the center of everything we do, striving to exceed expectations with every
                delivery.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Target className="text-amber-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Precision</h3>
              <p className="text-gray-600">
                We pay attention to every detail to ensure accurate and error-free deliveries every time.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Truck className="text-amber-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Efficiency</h3>
              <p className="text-gray-600">
                Our optimized delivery processes ensure we can handle high volumes without compromising on quality.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-amber-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Excellence</h3>
              <p className="text-gray-600">
                We continuously strive for excellence in all aspects of our service, from customer support to delivery
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/438255413_1834892820270227_8639547085382915831_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGWtXEQ1yyBwN7egKqmOfYlGk0nwCc-PcAaTSfAJz49wAiIdzxSK_9tDWfxl5Q2iSxVroq9TgmM_9Hg8PvjA8SD&_nc_ohc=Nub2xOCmq3kQ7kNvwFkMbYG&_nc_oc=AdnPNs8xfQYVSmmXFXfTEBLOWajan1LHWPeLXI_yR2-OTts2M90o99FVEHIg5sZUkzQeHUNTR9qnB0Fg31s7oScq&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=9vAr3oqkcNYbn8bDfldTrw&oh=00_AfHbbMj68PEWtwFugUfnzaW1O_jkJmAxhgnqVsed11_gPw&oe=68140F67"
                alt="Team Member"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="font-bold text-lg mb-1">Fojle Tuhin</h3>
              <p className="text-gray-600 mb-2">Parcel Delivery Lead</p>
              <div className="flex justify-center">
                
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/492087166_621279494206967_6225435477574727368_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFV7h1zmgaAOkbTnUE3qm6SAcwudvXxuQgBzC529fG5CBT0LsA0JWXoEnlrlEFhqukPo2A9QkturUT1EUTZZFIu&_nc_ohc=-TgNV29LbicQ7kNvwErxqn-&_nc_oc=AdnvvnHobf1kFLDtSOG85mBBfqlYPuffjFXzoE9glNXA-n_Z8qz-31Frrsmm14M4mGri6Dha3r13fB43euAFD_1i&_nc_zt=24&_nc_ht=scontent.fdac99-1.fna&_nc_gid=cSZubzkuFurQYMCAwBypGg&oh=00_AfHHZoMomh6I0oR7Waug3By5JMfWCL5Zoiae1ADZnrzrHg&oe=6814386E"
                alt="Team Member"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="font-bold text-lg mb-1">Riyaz Hridoy</h3>
              <p className="text-gray-600 mb-2">Customer Service Manager</p>
              <div className="flex justify-center">
                
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/490318673_651592837638684_5107008214709602271_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFaZcJdgFIEcyYVFo2CTcwwinNGjX7i8JGKc0aNfuLwkfwvDUwV6JYWllFpXeI-PuBxTifZOdnrrfzbOCZ6iSCb&_nc_ohc=jxEFT8L4dXMQ7kNvwEznfnl&_nc_oc=AdkWvQ4V48cGa-AWxQfBm19kzAlI8E5tDTXOAzogdXWQzWy_bLgYVLxEccU9J08sTbbLTpPRYJ1-SlTVJyWvRM5A&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=_RA9yOSAQ3W2qgKJihskeA&oh=00_AfHio33wu6zpDkuyhtbgXztmwtbfxF9xFyYkDO6ILKOiOQ&oe=68142858"
                alt="Team Member"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="font-bold text-lg mb-1">Hridoy Ahmed</h3>
              <p className="text-gray-600 mb-2">Operations Director</p>
              <div className="flex justify-center">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To provide the most reliable, efficient, and customer-friendly delivery service in Bangladesh,
                connecting businesses and individuals with seamless logistics solutions that save time and reduce
                stress.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To become the leading delivery service provider in Bangladesh, known for innovation, reliability, and
                exceptional customer service, while expanding our reach to every corner of the country.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
