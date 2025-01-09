export const topics = {
  foundations: {
    title: "Foundations",
    topics: [
      {
        id: "math",
        title: "Mathematics for ML",
        description: "Learn linear algebra, calculus, and probability.",
        subtopics: [
          { id: "linear-algebra", title: "Linear Algebra" },
          { id: "calculus", title: "Calculus" },
          { id: "probability", title: "Probability & Statistics" },
        ],
        related: ["programming", "data-analysis"],
      },
      {
        id: "programming",
        title: "Programming",
        description: "Master Python basics and data structures.",
        subtopics: [
          { id: "python-basics", title: "Python Basics" },
          { id: "data-structures", title: "Data Structures" },
          { id: "algorithms", title: "Algorithms" },
        ],
        related: ["math", "data-analysis"],
      },
      {
        id: "data-analysis",
        title: "Data Analysis",
        description: "Explore Pandas, NumPy, and data visualization.",
        subtopics: [
          { id: "pandas", title: "Pandas" },
          { id: "numpy", title: "NumPy" },
          { id: "data-visualization", title: "Data Visualization" },
        ],
        related: ["math", "programming"],
      },
    ],
  },
  coreML: {
    title: "Core Machine Learning",
    topics: [
      {
        id: "supervised",
        title: "Supervised Learning",
        description: "Understand regression and classification.",
        subtopics: [
          { id: "regression", title: "Regression" },
          { id: "classification", title: "Classification" },
          { id: "svm", title: "Support Vector Machines (SVM)" },
        ],
        related: ["unsupervised", "evaluation"],
      },
      {
        id: "unsupervised",
        title: "Unsupervised Learning",
        description: "Learn clustering and dimensionality reduction.",
        subtopics: [
          { id: "clustering", title: "Clustering" },
          { id: "pca", title: "Principal Component Analysis (PCA)" },
          { id: "k-means", title: "K-Means" },
        ],
        related: ["supervised", "evaluation"],
      },
      {
        id: "evaluation",
        title: "Model Evaluation",
        description: "Study metrics like accuracy, precision, and recall.",
        subtopics: [
          { id: "metrics", title: "Metrics" },
          { id: "cross-validation", title: "Cross-Validation" },
          { id: "confusion-matrix", title: "Confusion Matrix" },
        ],
        related: ["supervised", "unsupervised"],
      },
    ],
  },
  advanced: {
    title: "Advanced Topics",
    topics: [
      {
        id: "deep-learning",
        title: "Deep Learning",
        description: "Dive into neural networks, CNNs, and RNNs.",
        subtopics: [
          { id: "neural-networks", title: "Neural Networks" },
          { id: "cnns", title: "Convolutional Neural Networks (CNNs)" },
          { id: "rnns", title: "Recurrent Neural Networks (RNNs)" },
        ],
        related: ["nlp", "rl"],
      },
      {
        id: "nlp",
        title: "Natural Language Processing",
        description: "Explore text processing and transformers.",
        subtopics: [
          { id: "text-processing", title: "Text Processing" },
          { id: "transformers", title: "Transformers" },
          { id: "sentiment-analysis", title: "Sentiment Analysis" },
        ],
        related: ["deep-learning", "rl"],
      },
      {
        id: "rl",
        title: "Reinforcement Learning",
        description: "Learn about agents, rewards, and policies.",
        subtopics: [
          { id: "q-learning", title: "Q-Learning" },
          { id: "policy-gradients", title: "Policy Gradients" },
          { id: "deep-rl", title: "Deep Reinforcement Learning" },
        ],
        related: ["deep-learning", "nlp"],
      },
    ],
  },
};