// Shared functionality across all pages of The Meme Protest

// Initialize localStorage with seed data if empty
function initializeData() {
    if (!localStorage.getItem('protests')) {
        const seedProtests = [
            {
                id: Date.now() + 1,
                title: "Free Pizza Fridays or We Riot",
                summary: "We spend thousands on tuition but can't get a single slice of free pizza? This is about dignity. This is about cheese. This is about standing up for what really matters. Join us every Friday at noon in the quad until the administration hears our demands. We will not be silenced. We will not go hungry. #PizzaOrRiot",
                memeUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23ff1744' width='400' height='400'/%3E%3Ctext x='50%25' y='45%25' fill='white' font-size='40' font-weight='bold' text-anchor='middle' font-family='Impact'%3EDEMAND%3C/text%3E%3Ctext x='50%25' y='60%25' fill='white' font-size='50' font-weight='bold' text-anchor='middle' font-family='Impact'%3EPIZZA%3C/text%3E%3C/svg%3E",
                university: "State University",
                organizer: "PizzaWarrior2026",
                contact: "pizzaprotest@proton.me",
                upvotes: 147,
                supporters: ["PizzaWarrior2026", "HungryStudent", "CheeseDefender"],
                timestamp: Date.now() - 86400000 * 5
            },
            {
                id: Date.now() + 2,
                title: "Library Hours Until 3AM During Finals",
                summary: "We're nocturnal creatures during finals week. The library closes at midnight but our brains don't turn off until dawn. We're not asking for much - just the basic right to stress-study in a climate-controlled environment instead of a 24-hour diner. This meme represents all of us zombie-walking through campus at 2AM with nowhere to go. Extend the hours or face our caffeinated wrath.",
                memeUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%231a1a1a' width='400' height='400'/%3E%3Ctext x='50%25' y='40%25' fill='%2300ff41' font-size='35' font-weight='bold' text-anchor='middle' font-family='Impact'%3EME AT 2AM%3C/text%3E%3Ctext x='50%25' y='60%25' fill='%2300ff41' font-size='30' font-weight='bold' text-anchor='middle' font-family='Impact'%3ENEEDING THE%3C/text%3E%3Ctext x='50%25' y='75%25' fill='%2300ff41' font-size='30' font-weight='bold' text-anchor='middle' font-family='Impact'%3ELIBRARY%3C/text%3E%3C/svg%3E",
                university: "Metro Tech",
                organizer: "NightOwlNerd",
                contact: "latenightstudy@gmail.com",
                upvotes: 203,
                supporters: ["NightOwlNerd", "CaffeineDemon", "StudyGoblin", "FinalsVictor"],
                timestamp: Date.now() - 86400000 * 3
            },
            {
                id: Date.now() + 3,
                title: "Mental Health Days = Sick Days",
                summary: "Your brain is part of your body. Mental health days should be treated exactly like sick days - no questions asked, no doctor's note required, no guilt. We're protesting the archaic policy that only recognizes physical illness. This meme is a mirror reflecting what we're all thinking but too exhausted to say. Let's normalize taking care of our minds. This movement starts here, spreads everywhere.",
                memeUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23ff00ff' width='400' height='400'/%3E%3Ctext x='50%25' y='45%25' fill='white' font-size='32' font-weight='bold' text-anchor='middle' font-family='Impact'%3EMENTAL HEALTH%3C/text%3E%3Ctext x='50%25' y='60%25' fill='white' font-size='38' font-weight='bold' text-anchor='middle' font-family='Impact'%3EIS HEALTH%3C/text%3E%3C/svg%3E",
                university: "Independent",
                organizer: "MindMatters",
                contact: "mentalhealthprotest@proton.me",
                upvotes: 312,
                supporters: ["MindMatters", "BurnoutSurvivor", "TherapyAdvocate", "RestIsResistance", "SelfCareWarrior"],
                timestamp: Date.now() - 86400000 * 7
            },
            {
                id: Date.now() + 4,
                title: "Abolish Unpaid Internships",
                summary: "Experience shouldn't cost money. We're already paying tuition, rent, and surviving on ramen - now they want us to work for free too? This is exploitation dressed up as opportunity. This meme captures the absurdity of requiring years of unpaid labor just to enter your own field. We demand fair compensation for all work. Period. No exceptions. No excuses. Join the movement to make 'unpaid internship' a phrase of the past.",
                memeUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23ffd700' width='400' height='400'/%3E%3Ctext x='50%25' y='35%25' fill='black' font-size='28' font-weight='bold' text-anchor='middle' font-family='Impact'%3EREQUIRES 3 YEARS%3C/text%3E%3Ctext x='50%25' y='50%25' fill='black' font-size='28' font-weight='bold' text-anchor='middle' font-family='Impact'%3EEXPERIENCE%3C/text%3E%3Ctext x='50%25' y='70%25' fill='black' font-size='32' font-weight='bold' text-anchor='middle' font-family='Impact'%3EPAYS: $0%3C/text%3E%3C/svg%3E",
                university: "Business College",
                organizer: "LaborRights2026",
                upvotes: 189,
                supporters: ["LaborRights2026", "InternInPain", "PayMePlease"],
                timestamp: Date.now() - 86400000 * 2
            },
            {
                id: Date.now() + 5,
                title: "Mandatory Nap Rooms on Every Campus",
                summary: "Sleep deprivation is not a badge of honor - it's a health crisis. We demand dedicated nap spaces on campus with dim lighting, comfortable surfaces, and soundproofing. This isn't luxury, it's basic human needs. The meme shows what we all feel: sometimes you need 20 minutes of unconsciousness to make it through the day. Universities invest millions in sports facilities but won't give us a quiet room with a couch. That changes now.",
                memeUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%234a148c' width='400' height='400'/%3E%3Ctext x='50%25' y='45%25' fill='%2300ffff' font-size='35' font-weight='bold' text-anchor='middle' font-family='Impact'%3EPRODUCTIVITY%3C/text%3E%3Ctext x='50%25' y='60%25' fill='%2300ffff' font-size='40' font-weight='bold' text-anchor='middle' font-family='Impact'%3EOR NAPS?%3C/text%3E%3Ctext x='50%25' y='75%25' fill='%2300ffff' font-size='30' font-weight='bold' text-anchor='middle' font-family='Impact'%3EBOTH. BOTH.%3C/text%3E%3C/svg%3E",
                university: "Independent",
                organizer: "SleepyRevolutionary",
                contact: "napprotest@proton.me",
                upvotes: 256,
                supporters: ["SleepyRevolutionary", "ExhaustedScholar", "PowerNapper", "RestRadical"],
                timestamp: Date.now() - 86400000 * 4
            },
            {
                id: Date.now() + 6,
                title: "Climate Action Now - Not \"By 2050\"",
                summary: "2050 is too late. We'll be underwater by then. This meme perfectly encapsulates the frustration of watching world leaders set deadlines three decades away while the planet burns today. We demand immediate action: divest from fossil fuels, invest in renewables, ban single-use plastics on campus NOW. Not next year. Not next decade. NOW. The future is being written by those who show up, and we're showing up with memes and demands.",
                memeUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%2300ff41' width='400' height='400'/%3E%3Ctext x='50%25' y='40%25' fill='black' font-size='38' font-weight='bold' text-anchor='middle' font-family='Impact'%3ETHE PLANET:%3C/text%3E%3Ctext x='50%25' y='55%25' fill='black' font-size='32' font-weight='bold' text-anchor='middle' font-family='Impact'%3EON FIRE%3C/text%3E%3Ctext x='50%25' y='75%25' fill='black' font-size='28' font-weight='bold' text-anchor='middle' font-family='Impact'%3ELEADERS: *crickets*%3C/text%3E%3C/svg%3E",
                university: "Green University",
                organizer: "EcoWarrior",
                contact: "climateaction@proton.me",
                upvotes: 421,
                supporters: ["EcoWarrior", "GreenFuture", "ClimateJustice", "SolarPunk", "EarthDefender", "ZeroWaste"],
                timestamp: Date.now() - 86400000 * 6
            },
            {
                id: Date.now() + 7,
                title: "Gender-Neutral Bathrooms Everywhere",
                summary: "It's 2026 and we're still fighting over bathrooms? This is about basic human dignity and inclusion. Every building needs gender-neutral bathroom options - not hidden in the basement, not one per campus, but EVERYWHERE. This meme represents everyone who's ever felt unsafe or unwelcome in a binary bathroom system. We're not asking permission anymore. We're demanding change. Trans rights are human rights. Non-binary identities are valid. Bathrooms are for everyone.",
                memeUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23ff6ec7' width='400' height='400'/%3E%3Ctext x='50%25' y='40%25' fill='white' font-size='32' font-weight='bold' text-anchor='middle' font-family='Impact'%3EALL BATHROOMS%3C/text%3E%3Ctext x='50%25' y='55%25' fill='white' font-size='35' font-weight='bold' text-anchor='middle' font-family='Impact'%3EARE FOR%3C/text%3E%3Ctext x='50%25' y='70%25' fill='white' font-size='40' font-weight='bold' text-anchor='middle' font-family='Impact'%3EALL HUMANS%3C/text%3E%3C/svg%3E",
                university: "Liberty College",
                organizer: "InclusionNow",
                upvotes: 178,
                supporters: ["InclusionNow", "AllyInAction", "QueerVoices"],
                timestamp: Date.now() - 86400000 * 1
            }
        ];
        localStorage.setItem('protests', JSON.stringify(seedProtests));
    }

    if (!localStorage.getItem('currentUser')) {
        localStorage.setItem('currentUser', JSON.stringify({
            username: null,
            votedProtests: [],
            submittedProtests: [],
            supportedProtests: []
        }));
    }
}

// Get all protests
function getProtests() {
    const protests = localStorage.getItem('protests');
    return protests ? JSON.parse(protests) : [];
}

// Get single protest by ID
function getProtest(id) {
    const protests = getProtests();
    return protests.find(p => p.id === parseInt(id));
}

// Add new protest
function addProtest(protestData) {
    const protests = getProtests();
    const newProtest = {
        id: Date.now(),
        title: protestData.title,
        summary: protestData.summary,
        memeUrl: protestData.memeUrl,
        university: protestData.university || 'Independent',
        organizer: protestData.organizer,
        contact: protestData.contact || '',
        upvotes: 0,
        supporters: [protestData.organizer],
        timestamp: Date.now()
    };
    protests.push(newProtest);
    localStorage.setItem('protests', JSON.stringify(protests));
    
    // Add to user's submitted protests
    const user = getCurrentUser();
    user.submittedProtests.push(newProtest.id);
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    return newProtest.id;
}

// Update protest
function updateProtest(id, updates) {
    const protests = getProtests();
    const index = protests.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        protests[index] = { ...protests[index], ...updates };
        localStorage.setItem('protests', JSON.stringify(protests));
        return true;
    }
    return false;
}

// Delete protest
function deleteProtest(id) {
    const protests = getProtests();
    const filtered = protests.filter(p => p.id !== parseInt(id));
    localStorage.setItem('protests', JSON.stringify(filtered));
    
    // Remove from user's submitted protests
    const user = getCurrentUser();
    user.submittedProtests = user.submittedProtests.filter(pid => pid !== parseInt(id));
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Upvote protest
function upvoteProtest(protestId) {
    const user = getCurrentUser();
    const protests = getProtests();
    const protest = protests.find(p => p.id === parseInt(protestId));
    
    if (!protest) return false;
    
    // Check if already voted
    if (user.votedProtests.includes(parseInt(protestId))) {
        return false;
    }
    
    // Add vote
    protest.upvotes++;
    user.votedProtests.push(parseInt(protestId));
    
    // Save
    localStorage.setItem('protests', JSON.stringify(protests));
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    return true;
}

// Join protest as supporter
function joinProtest(protestId, username) {
    const protests = getProtests();
    const protest = protests.find(p => p.id === parseInt(protestId));
    
    if (!protest || protest.supporters.includes(username)) {
        return false;
    }
    
    protest.supporters.push(username);
    localStorage.setItem('protests', JSON.stringify(protests));
    
    const user = getCurrentUser();
    if (!user.supportedProtests.includes(parseInt(protestId))) {
        user.supportedProtests.push(parseInt(protestId));
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    
    return true;
}

// Get current user
function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : { username: null, votedProtests: [], submittedProtests: [], supportedProtests: [] };
}

// Set username
function setUsername(username) {
    const user = getCurrentUser();
    user.username = username;
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Check if user has voted on protest
function hasVoted(protestId) {
    const user = getCurrentUser();
    return user.votedProtests.includes(parseInt(protestId));
}

// Get total stats
function getTotalStats() {
    const protests = getProtests();
    return {
        totalProtests: protests.length,
        totalUpvotes: protests.reduce((sum, p) => sum + p.upvotes, 0)
    };
}

// Prompt for username if not set
function ensureUsername() {
    const user = getCurrentUser();
    if (!user.username) {
        const username = prompt('Enter your username/pseudonym to continue:');
        if (username && username.trim()) {
            setUsername(username.trim());
            return username.trim();
        }
        return null;
    }
    return user.username;
}

// Format timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = Date.now();
    const diff = now - timestamp;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
}

// Initialize on load
initializeData();
