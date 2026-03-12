import ArticleCard from "@/components/ArticleCard";

const articles = [
  { id: "1", title: "Understanding Your Rights Under the Domestic Violence Act", author: "Adv. Priya Sharma", date: "Mar 5, 2026", tags: ["Domestic Violence", "Legal Rights"], excerpt: "A comprehensive guide to understanding your rights and the protections available under the law." },
  { id: "2", title: "Workplace Harassment: How to File a Complaint", author: "Adv. Anita Desai", date: "Mar 1, 2026", tags: ["Workplace", "Harassment"], excerpt: "Step-by-step guide on how to file a complaint under the POSH Act." },
  { id: "3", title: "Property Rights for Women: What You Need to Know", author: "Adv. Kavita Singh", date: "Feb 25, 2026", tags: ["Property", "Rights"], excerpt: "Women's rights to property under Hindu Succession Act and other applicable laws." },
  { id: "4", title: "Cyber Crime Against Women: Prevention & Legal Action", author: "Adv. Meera Patel", date: "Feb 20, 2026", tags: ["Cyber Crime", "Safety"], excerpt: "How to protect yourself online and the legal remedies available for cyber harassment." },
  { id: "5", title: "Child Custody Laws in India", author: "Adv. Priya Sharma", date: "Feb 15, 2026", tags: ["Family Law", "Child Custody"], excerpt: "Understanding custody rights, factors courts consider, and how to strengthen your case." },
  { id: "6", title: "Free Legal Aid: How to Access Government Programs", author: "Adv. Sunita Verma", date: "Feb 10, 2026", tags: ["Legal Aid", "Government"], excerpt: "A guide to accessing free legal services provided by the government." },
];

const Articles = () => (
  <div className="space-y-6">
    <div>
      <h1 className="font-heading text-2xl font-bold mb-2">Legal Awareness Articles</h1>
      <p className="text-muted-foreground">Read articles by verified advocates to know your rights.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((a) => <ArticleCard key={a.id} {...a} />)}
    </div>
  </div>
);

export default Articles;
