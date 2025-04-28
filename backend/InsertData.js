const mongoose = require('mongoose');
const News = require('./db/events'); // adjust the path according to your project

const sampleEvents = [
    {
      topic: "Web3 Developer Summit",
      date: "2024-06-15",
      time: "10:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      organizer: "global",
      organizerName: "Global Blockchain Alliance",
      imgUrl: "https://pbs.twimg.com/profile_images/1600832050029903872/7G1KNNL6_400x400.png",
      description: `Join top Web3 developers to explore the future of decentralized applications and blockchain technology. This full-day summit will feature keynote speakers, panel discussions, and hands-on workshops covering the latest trends and technologies in the Web3 space.`,
      status: "upcoming",
      speakers: [
        { name: "Alex Johnson", role: "CTO at Ethereum Foundation", image: "https://www.example.com/images/alex.jpg" },
        { name: "Maria Garcia", role: "Founder of DeFi Labs", image: "https://www.example.com/images/maria.jpg" },
        { name: "David Kim", role: "Smart Contract Security Expert", image: "https://www.example.com/images/david.jpg" }
      ],
      agenda: [
        { time: "10:00 AM - 10:30 AM", title: "Registration and Welcome Coffee" },
        { time: "10:30 AM - 11:30 AM", title: "Keynote: The Future of Web3 Development" },
        { time: "11:45 AM - 12:45 PM", title: "Panel Discussion: Scaling Blockchain Applications" }
      ]
    },
    {
      topic: "AI and Machine Learning Expo",
      date: "2024-07-20",
      time: "9:00 AM - 4:00 PM",
      location: "New York, NY",
      organizer: "global",
      organizerName: "AI Research Hub",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgZ79wjF_difC35Vo0B9QdM-s6YiY-DOTbQ&s",
      description: `Explore the latest advancements in artificial intelligence and machine learning. Hear from experts in the field and see real-world AI applications in action.`,
      status: "upcoming",
      speakers: [
        { name: "John Doe", role: "CEO of AI Innovations", image: "https://www.example.com/images/john.jpg" },
        { name: "Sara Lee", role: "Lead ML Engineer at OpenAI", image: "https://www.example.com/images/sara.jpg" }
      ],
      agenda: [
        { time: "9:00 AM - 10:00 AM", title: "Opening Keynote" },
        { time: "10:15 AM - 11:45 AM", title: "Workshop: Deep Learning in Practice" }
      ]
    },
    {
      topic: "Blockchain for Business",
      date: "2024-08-10",
      time: "8:00 AM - 3:00 PM",
      location: "London, UK",
      organizer: "global",
      organizerName: "Blockchain Experts",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXvWKpiJxufTb0i05xxqfEFWggIqCwOY0Zw&s",
      description: `Learn how businesses can leverage blockchain for improved transparency, efficiency, and security. Network with industry leaders and discover real-world use cases.`,
      status: "upcoming",
      speakers: [
        { name: "Robert Smith", role: "Blockchain Strategist", image: "https://www.example.com/images/robert.jpg" }
      ],
      agenda: [
        { time: "8:00 AM - 9:00 AM", title: "Introduction to Blockchain" },
        { time: "9:30 AM - 12:00 PM", title: "Case Studies in Blockchain Adoption" }
      ]
    },
    {
      topic: "FinTech Revolution",
      date: "2024-09-05",
      time: "10:00 AM - 5:00 PM",
      location: "Berlin, Germany",
      organizer: "global",
      organizerName: "FinTech Global",
      imgUrl: "https://miro.medium.com/v2/resize:fit:1000/1*Lw4v-hKjj9dTJfoz67N7Cw.jpeg",
      description: `A day dedicated to exploring how financial technologies are revolutionizing the industry. From blockchain to AI-powered finance, discover the future of money.`,
      status: "upcoming",
      speakers: [
        { name: "Ella Green", role: "FinTech Expert", image: "https://www.example.com/images/ella.jpg" }
      ],
      agenda: [
        { time: "10:00 AM - 11:00 AM", title: "The Rise of Digital Currency" },
        { time: "11:30 AM - 1:00 PM", title: "AI in Personal Finance" }
      ]
    },
    {
      topic: "Smart Cities Conference",
      date: "2024-09-18",
      time: "9:00 AM - 4:00 PM",
      location: "Sydney, Australia",
      organizer: "global",
      organizerName: "Smart Cities Coalition",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6wHhxNo7Xp0-6hpkxOqfzR44K6maPlGFLQ&s",
      description: `Discuss the latest innovations in smart cities, including IoT, sustainability, and infrastructure. Learn how cities around the world are transforming to become more efficient and livable.`,
      status: "upcoming",
      speakers: [
        { name: "Liam Brown", role: "Urban Planning Expert", image: "https://www.example.com/images/liam.jpg" }
      ],
      agenda: [
        { time: "9:00 AM - 10:00 AM", title: "Welcome to Smart Cities" },
        { time: "10:30 AM - 12:00 PM", title: "Technology in Urban Planning" }
      ]
    },
    {
      topic: "Data Science for Beginners",
      date: "2024-10-12",
      time: "10:00 AM - 4:00 PM",
      location: "Toronto, Canada",
      organizer: "community",
      organizerName: "Data Science Hub",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6V5Z-Fv9MhW1BT9UAPz6CqYse7PyHbS6Yw&s",
      description: `A hands-on workshop for beginners in data science. Learn the basics of data analysis, machine learning algorithms, and how to work with data using popular tools like Python and R.`,
      status: "upcoming",
      speakers: [
        { name: "Alice Cooper", role: "Data Scientist", image: "https://www.example.com/images/alice.jpg" }
      ],
      agenda: [
        { time: "10:00 AM - 11:30 AM", title: "Introduction to Data Science" },
        { time: "12:00 PM - 1:30 PM", title: "Data Preprocessing with Python" }
      ]
    },
    {
      topic: "Cybersecurity Symposium",
      date: "2024-11-05",
      time: "9:00 AM - 5:00 PM",
      location: "Paris, France",
      organizer: "global",
      organizerName: "Cybersecurity Institute",
      imgUrl: "https://www.rit.edu/cybersecurity/sites/rit.edu.cybersecurity/files/images/paragraph/image-card/Range.jpg",
      description: `Explore the latest trends in cybersecurity, from threat intelligence to data protection. Hear from top security professionals and learn how to protect your systems in an increasingly complex digital world.`,
      status: "upcoming",
      speakers: [
        { name: "Charlie White", role: "Cybersecurity Specialist", image: "https://www.example.com/images/charlie.jpg" }
      ],
      agenda: [
        { time: "9:00 AM - 10:00 AM", title: "Opening Address on Cybersecurity" },
        { time: "10:30 AM - 12:00 PM", title: "Advanced Threat Detection Techniques" }
      ]
    },
    {
      topic: "Tech Innovators Summit",
      date: "2024-12-01",
      time: "9:00 AM - 6:00 PM",
      location: "Tokyo, Japan",
      organizer: "community",
      organizerName: "Tech Innovators Network",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7DsMsbIQlqYjFbGy-vdCpTUO0J0Chdiguw&s",
      description: `Join the brightest minds in technology for a day of networking, innovation, and inspiration. Learn about the latest breakthroughs in tech and how they will shape the future.`,
      status: "upcoming",
      speakers: [
        { name: "Hiroshi Tanaka", role: "Tech Innovator", image: "https://www.example.com/images/hiroshi.jpg" }
      ],
      agenda: [
        { time: "9:00 AM - 10:00 AM", title: "Tech Innovations in 2024" },
        { time: "10:30 AM - 12:00 PM", title: "Building the Future of AI" }
      ]
    }
  ];

async function insertSampleData() {
  try {
    await mongoose.connect('mongodb+srv://database_connect:connect0987@cluster0.okeuehz.mongodb.net/connectedly?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000  // Increased timeout to 30 seconds
      });
    await News.insertMany(sampleEvents);
    console.log('Sample data inserted successfully!');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertSampleData();
