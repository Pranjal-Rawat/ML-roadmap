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
        resources: [
          { title: "Linear Algebra Course", link: "https://example.com/linear-algebra" },
          { title: "Calculus Book", link: "https://example.com/calculus-book" },
        ],
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
        resources: [
          { title: "Python Crash Course", link: "https://example.com/python-crash-course" },
          { title: "Data Structures Tutorial", link: "https://example.com/data-structures" },
        ],
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
        resources: [
          { title: "Pandas Documentation", link: "https://pandas.pydata.org/" },
          { title: "Matplotlib Tutorial", link: "https://example.com/matplotlib" },
        ],
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
        resources: [
          { title: "Supervised Learning Course", link: "https://example.com/supervised-learning" },
          { title: "SVM Tutorial", link: "https://example.com/svm-tutorial" },
        ],
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
        resources: [
          { title: "Unsupervised Learning Course", link: "https://example.com/unsupervised-learning" },
          { title: "PCA Explained", link: "https://example.com/pca-explained" },
        ],
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
        resources: [
          { title: "Model Evaluation Guide", link: "https://example.com/model-evaluation" },
          { title: "Confusion Matrix Tutorial", link: "https://example.com/confusion-matrix" },
        ],
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
        resources: [
          { title: "Deep Learning Book", link: "https://example.com/deep-learning-book" },
          { title: "CNN Tutorial", link: "https://example.com/cnn-tutorial" },
        ],
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
        resources: [
          { title: "NLP Course", link: "https://example.com/nlp-course" },
          { title: "Transformers Explained", link: "https://example.com/transformers" },
        ],
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
        resources: [
          { title: "Reinforcement Learning Book", link: "https://example.com/rl-book" },
          { title: "Q-Learning Tutorial", link: "https://example.com/q-learning" },
        ],
      },
    ],
  },
};