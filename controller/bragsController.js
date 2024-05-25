const brags = [
  {
    texto:
      "Since I’ve been using Triage, I’m more caught up on my email than I have been in years.",
    imagen: "brag1.png",
  },
  {
    texto:
      "If you're constantly battling to keep your email account at inbox zero, Triage for iOS could be worth a look.",
    imagen: "brag2.png",
  },
  {
    texto:
      "Triage makes it feel seamless, and even fun, to achieve — if not Inbox Zero — at least Inbox Zen.",
    imagen: "brag3.png",
  },
  {
    texto:
      "Triage provides the first aid necessary to get your inbox back in fighting shape.",
    imagen: "brag4.png",
  },
  {
    texto:
      "Triage is a boon to those who have struggled to keep their inboxes clean and organized.",
    imagen: "brag5.png",
  },
  {
    texto: "Triage is my new favorite email app for iPhone.",
    imagen: "brag6.png",
  },
];

const bragsController = {
  read(req, res) {
    res.json(brags).status(200);
  },
};

module.exports = bragsController;
