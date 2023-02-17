export const blogList = [
  {
    id: 2,
    title:
      "Quickly Test and Develop your ACA-Py Code with Indicio’s New Minimal Example Repo",
    category: "tech",
    subCategory: ["aca-py"],
    description: (
      <div>
        <h3>
          Coding in ACA-Py just got a whole lot easier with Indicio’s a simple,
          hackable repo
        </h3>
        <br />
        Indicio recently unveiled its{" "}
        <a
          href="https://github.com/Indicio-tech/acapy-minimal-example"
          target="_blank"
        >
          Minimal Example Repo
        </a>
        , built with both experienced developers and those just starting out and
        in mind.
        <br />
        <br />
        <h4>What is it?</h4> Indicio’s{" "}
        <a
          href="https://github.com/Indicio-tech/acapy-minimal-example"
          target="_blank"
        >
          Minimal Example repo (AME)
        </a>{" "}
        is a simple, hackable repo containing the building blocks to quickly
        reproduce an issue or demonstrate a feature within ACA-Py.
        <br />
        <br />
        <h4>Who is it for?</h4> Developers and testers (especially those new to
        ACA-Py) who are looking to build scenarios with ACA-Py will find the
        repo very useful, whether they are seeking to quickly reproduce an issue
        (such as revocation, trust pings, issuing and verifying a simple
        credential, or sending messages between agents) or to demonstrate a
        feature by writing one simple script or Pytest test. The repo cuts down
        on the amount of time searching through documentation, while also being
        approachable to developers new to ACA-Py. Instead of looking through all
        the Aries RFCs, Indicio’s Aca-Py Minimal Example will help autofill
        certain scenarios for you.
        <br />
        <br />
        <h4>How does it make using ACA-Py faster / convenient?</h4> It gives you
        a significant head start in replicating scenarios in ACA-Py. For
        example, a traditional exchange between an Alice and Bob¹ agent can be
        found in `minimal_example.py.` It allows you to quickly copy, paste, and
        modify the components you need to get your scenario to work, without all
        of the hassle of sorting through the Aries RFCs documentation.
        <br />
        <br />
        <h4>What is available now?</h4> Presently, we have examples constructed,
        with revocation support, for a traditional Alice and Bob agent scenario,
        supporting protocol versions 1 and 2, and are working to add more
        functionality. Further work will include generators for other common
        agent setups (`Dockerfile`s + `docker-compose.yml`) such as:
        <ul>
          <li>Alice, Bob, Mediator</li>
          <li>Issuer, Holder, Verifier</li>
          <li>Endorser, Issuer, Holder, Verifier</li>
          <li>
            ACA-Py, Echo (Remote controlled static agent; for sending raw
            messages)
          </li>
          <li>
            Any combination of the above with a specified set of plugins
            installed
          </li>
          <li>Any combination of the above with tails server and/or tunnel</li>
        </ul>
        <br />
        <br />
        <h4>
          <a
            href="https://github.com/Indicio-tech/acapy-minimal-example"
            target="_blank"
          >
            Get Started Today
          </a>
        </h4>
        In just three simple steps, the{" "}
        <a
          href="https://github.com/Indicio-tech/acapy-minimal-example"
          target="_blank"
        >
          AME repo
        </a>{" "}
        can reduce the amount of code you need to write and save you time:
        <br />
        <br />
        <i>A.) Determine the scenario you are writing. </i>
        <br />
        What does this flow look like? What all needs to happen in this flow?
        <br />
        <br />
        <i>
          B.) Determine if the AME repo fully or partly supports that scenario.
        </i>
        <br />
        Is the scenario you are looking for already written?
        <br />
        <br />
        <i>
          C.) Copy and paste the portions that are relevant to the scenario you
          are working on and modify it accordingly.
        </i>
        <br />
        <br />
        If the steps you are looking for aren’t already in `minimal_example.py`,
        try searching in `protocols.py`
        <br />
        <br />¹ Aries agents are software components that act on behalf of
        entities—people, organizations and things. These agents enable
        decentralized, self-sovereign identity based on a secure, peer-to-peer
        communications channel.
      </div>
    ),
    authorName: "Alexandra N. Walker",
    authorAvatar: "/assets/images/alex-optimize.jpeg",
    createdAt: "February 7th, 2023",
    cover: "/assets/images/blog2-photo1-optimize.jpeg",
  },
  {
    id: 1,
    title: "Complete 7-Day Itinerary for Exploring South Albania",
    category: "travel",
    subCategory: [
      "albania",
      "tirana",
      "berat",
      "vlora",
      "permet",
      "saranda",
      "gjirokastra",
    ],
    description: (
      <div>
        From its stunning coastal towns to its charming old cities and
        breathtaking natural wonders, South Albania is a hidden gem waiting to
        be uncovered.
        <br />
        <br />
        <b>Day 1: Tirana</b> <i>(Jam Packed Day)</i>
        <ul>
          <li>
            (Mandatory) Start your morning off by visiting the plethera of cafes
            Tirana has to offer. (I personally like hana's corner cafe, in the
            Blloku district)
          </li>
          <li>
            <i>(Optional)</i> Visit the House of Leaves. Warning: this place
            covers a very dark part of Albania's history, in their communist
            past. Proceed here with caution.
          </li>
          <li>Visit Skanderbeg Square, named after Albania's national hero</li>
          <li>In Skanderbeg, visit the Opera and Ballet Theater</li>
          <li>
            Admire the stunning architecture of the Eth'hem Bey Mosque, a symbol
            of Tirana's beauty
          </li>
          <li>
            Still within Skanderbeg, head to the Opera and Ballet Theater{" "}
          </li>
          <li>
            Just next door, head to Bunk'Art 2 to learn about Albania's rich
            history{" "}
          </li>
          <li>
            Enjoy a delicious traditional meal at one of Tirana's local
            restaurants (the Blloku district is quite popular)
          </li>
          <li>
            If you have the extra time, also explore Tirana's Open Air Museum,
            the surrounding markets, and parks :){" "}
          </li>
        </ul>
        <img alt="Tirana" src="/assets/images/blog1-photo1-optimize.jpeg" />
        <br />
        <br />
        <b>Day 2: Berat</b>{" "}
        <ul>
          <li>
            Explore the old town of Berat, known as the "city of a thousand
            windows"{" "}
          </li>
          <li>
            Climb to the top of the well-preserved Berat Castle, offering
            panoramic views of the city{" "}
          </li>
          <li>
            Visit the Onufri National Museum, displaying the works of Albania's
            famous Renaissance painter
          </li>
          <li>
            Walk through the cobbled streets of the Gorica neighborhood, known
            for its traditional architecture
          </li>
          <li>
            Experience the religious and cultural heritage of the Lead Mosque,
            one of the oldest in the country
          </li>
        </ul>
        <img alt="Berat" src="/assets/images/blog1-photo2-optimize.jpeg" />
        <br />
        <br />
        <b>Day 3: Gjirokastra</b>{" "}
        <ul>
          <li>
            Tour the UNESCO World Heritage Site of Gjirokastra, famous for its
            unique stone houses{" "}
          </li>
          <li>
            Visit the Gjirokastra Ethnographic Museum to learn about the town's
            rich history{" "}
          </li>
          <li>
            Explore the old bazaar, where you can find traditional crafts and
            souvenirs Walk up to the hilltop castle, offering breathtaking views
            of the town and surroundings{" "}
          </li>
          <li>
            Taste the local cuisine at one of the town's traditional restaurants{" "}
          </li>
        </ul>
        <img
          alt="Gjirokastra"
          src="/assets/images/blog1-photo3-optimize.jpeg"
        />
        <br />
        <br />
        <b>Day 4: Saranda</b>{" "}
        <ul>
          <li>Soak up the sun on the beautiful beaches of Saranda </li>
          <li>
            Take a boat tour to the stunning island of Corfu, just off the coast
            of Albania{" "}
          </li>
          <li>
            Admire the stunning architecture of the Et'hem Bey Mosque, a symbol
            of Tirana's beauty
          </li>
          <li>
            Visit the ancient city of Butrint, a UNESCO World Heritage Site{" "}
          </li>
          <li>
            Explore the stunning Blue Eye, a natural spring with crystal-clear
            blue water
          </li>
        </ul>
        <img alt="Saranda" src="/assets/images/blog1-photo4-optimize.jpeg" />
        <br />
        <br />
        <b>Day 5: Vlora</b>{" "}
        <ul>
          <li>
            Learn about Vlora's role in Albania's liberation at the Independence
            Museum Walk along the picturesque seaside promenade of the town{" "}
          </li>
          <li>
            Visit the Memorial House of Ismail Qemali, the father of Albanian
            independence
          </li>
          <li>Explore the Cave of Syrmove, a stunning natural wonder </li>
          <li>
            Enjoy a fresh seafood dinner at one of Vlora's local restaurants{" "}
          </li>
        </ul>
        <img alt="Vlora" src="/assets/images/blog1-photo5-optimize.jpeg" />
        <br />
        <br />
        <b>Day 6: Permet</b>
        <ul>
          <li>
            Visit the historic town of Permet, known for its stunning natural
            beauty{" "}
          </li>
          <li>Take a walk through the beautiful Permeti Canyon </li>
          <li>Admire the stunning scenery at the Benje Thermal Baths </li>
          <li>
            Explore the traditional town of Kanine, home to the oldest mosque in
            Albania Taste the local cuisine at one of Permet's traditional
            restaurants{" "}
          </li>
        </ul>
        <img alt="Permet" src="/assets/images/blog1-photo6-optimize.jpeg" />
        <br />
        <br />
        <b>Day 7: Wrap it back up with Tirana</b>
        <ul>
          <li>Enjoy one final day in the vibrant capital of Tirana </li>
          <li>
            Visit the Bunk'Art, a unique museum housed in a former nuclear
            bunker <i>(warning: this will probably take most of the day)</i>
          </li>
          <li>
            Admire the stunning murals and sculptures at the National Art
            Gallery Walk through the Park of Freedom, a peaceful green oasis in
            the city{" "}
          </li>
          <li>
            End your trip with a farewell dinner at one of Tirana's top
            restaurants{" "}
          </li>
          <li>
            Visit the Skanderbeg Square, named after Albania's national hero
          </li>
          <li>
            Enjoy a delicious traditional meal at one of Tirana's local
            restaurants
          </li>
        </ul>
        <br />
      </div>
    ),
    authorName: "Alexandra N. Walker",
    authorAvatar: "/assets/images/alex-optimize.jpeg",
    createdAt: "January 30th, 2023",
    cover: "/assets/images/albania-7day-itinerary-optimize.png",
  },
];
