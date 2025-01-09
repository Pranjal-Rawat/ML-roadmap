export const topics = {
  foundations: {
    title: "Foundations",
    topics: [
      {
        id: "intro-ml",
        title: "Introduction to ML",
        description: "Learn the basics of machine learning, its types, and applications.",
        subtopics: [
          {
            id: "what-is-ml",
            title: "What is Machine Learning?",
            description: "Overview of ML and its importance.",
            resources: [
              { title: "ML Basics by Google", link: "https://developers.google.com/machine-learning/crash-course" },
              { title: "Introduction to ML (Coursera)", link: "https://www.coursera.org/learn/machine-learning" },
            ],
          },
          {
            id: "types-of-ml",
            title: "Types of ML",
            description: "Supervised, unsupervised, and reinforcement learning.",
            resources: [
              { title: "Types of ML Explained", link: "https://towardsdatascience.com/types-of-machine-learning-algorithms-you-should-know-953a08248861" },
              { title: "ML Types (Udemy)", link: "https://www.udemy.com/course/machine-learning-types/" },
            ],
          },
          {
            id: "ml-applications",
            title: "Applications of ML",
            description: "Real-world use cases of ML.",
            resources: [
              { title: "ML Applications in Real Life", link: "https://www.analyticsvidhya.com/blog/2021/06/10-applications-of-machine-learning-in-real-world/" },
              { title: "ML in Healthcare", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5510742/" },
            ],
          },
        ],
        related: ["math-ml", "programming-ml"],
      },
      {
        id: "math-ml",
        title: "Mathematics for ML",
        description: "Learn linear algebra, calculus, and probability for ML.",
        subtopics: [
          {
            id: "linear-algebra",
            title: "Linear Algebra",
            description: "Vectors, matrices, eigenvalues, and eigenvectors.",
            resources: [
              { title: "Linear Algebra for ML (Coursera)", link: "https://www.coursera.org/learn/linear-algebra-machine-learning" },
              { title: "Linear Algebra Basics", link: "https://www.khanacademy.org/math/linear-algebra" },
            ],
          },
          {
            id: "calculus",
            title: "Calculus",
            description: "Derivatives, integrals, and optimization.",
            resources: [
              { title: "Calculus for ML (Khan Academy)", link: "https://www.khanacademy.org/math/calculus-1" },
              { title: "Calculus Basics", link: "https://www.mathsisfun.com/calculus/" },
            ],
          },
          {
            id: "probability",
            title: "Probability & Statistics",
            description: "Probability distributions and statistical inference.",
            resources: [
              { title: "Probability for ML (MIT)", link: "https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/" },
              { title: "Statistics Basics", link: "https://www.khanacademy.org/math/statistics-probability" },
            ],
          },
        ],
        related: ["intro-ml", "programming-ml"],
      },
      {
        id: "programming-ml",
        title: "Programming for ML",
        description: "Master Python and essential libraries for ML.",
        subtopics: [
          {
            id: "python-basics",
            title: "Python Basics",
            description: "Python syntax, control structures, and functions.",
            resources: [
              { title: "Python for Beginners (W3Schools)", link: "https://www.w3schools.com/python/" },
              { title: "Python Crash Course (Book)", link: "https://nostarch.com/pythoncrashcourse2e" },
            ],
          },
          {
            id: "numpy",
            title: "NumPy",
            description: "Numerical computations and array operations.",
            resources: [
              { title: "NumPy Documentation", link: "https://numpy.org/doc/" },
              { title: "NumPy Tutorial", link: "https://www.w3schools.com/python/numpy_intro.asp" },
            ],
          },
          {
            id: "pandas",
            title: "Pandas",
            description: "Data manipulation and analysis.",
            resources: [
              { title: "Pandas Documentation", link: "https://pandas.pydata.org/docs/" },
              { title: "Pandas Tutorial", link: "https://www.w3schools.com/python/pandas/default.asp" },
            ],
          },
        ],
        related: ["intro-ml", "math-ml"],
      },
      {
        id: "data-preprocessing",
        title: "Data Preprocessing",
        description: "Clean, transform, and prepare data for ML.",
        subtopics: [
          {
            id: "data-cleaning",
            title: "Data Cleaning",
            description: "Handle missing data and outliers.",
            resources: [
              { title: "Data Cleaning Techniques", link: "https://towardsdatascience.com/data-cleaning-in-python-the-ultimate-guide-2020-3e5f036a886d" },
              { title: "Handling Missing Data", link: "https://www.kaggle.com/alexisbcook/missing-values" },
            ],
          },
          {
            id: "feature-scaling",
            title: "Feature Scaling",
            description: "Normalize and standardize data.",
            resources: [
              { title: "Feature Scaling Explained", link: "https://www.analyticsvidhya.com/blog/2020/04/feature-scaling-machine-learning-normalization-standardization/" },
              { title: "Scikit-Learn Scaling", link: "https://scikit-learn.org/stable/modules/preprocessing.html" },
            ],
          },
          {
            id: "feature-encoding",
            title: "Feature Encoding",
            description: "Convert categorical data to numerical.",
            resources: [
              { title: "Encoding Categorical Data", link: "https://towardsdatascience.com/encoding-categorical-data-8333c3f08822" },
              { title: "One-Hot Encoding", link: "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html" },
            ],
          },
        ],
        related: ["programming-ml", "supervised"],
      },
    ],
  },
  coreML: {
    title: "Core Machine Learning",
    topics: [
      {
        id: "supervised",
        title: "Supervised Learning Algorithms",
        description: "Learn regression and classification techniques.",
        subtopics: [
          {
            id: "linear-regression",
            title: "Linear Regression",
            description: "Predict continuous values.",
            resources: [
              { title: "Linear Regression Tutorial", link: "https://www.analyticsvidhya.com/blog/2021/05/all-you-need-to-know-about-linear-regression/" },
              { title: "Scikit-Learn Linear Regression", link: "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html" },
            ],
          },
          {
            id: "logistic-regression",
            title: "Logistic Regression",
            description: "Classify binary outcomes.",
            resources: [
              { title: "Logistic Regression Explained", link: "https://towardsdatascience.com/logistic-regression-explained-9ee73cede081" },
              { title: "Logistic Regression in Python", link: "https://www.kaggle.com/learn/logistic-regression" },
            ],
          },
          {
            id: "decision-trees",
            title: "Decision Trees",
            description: "Tree-based classification and regression.",
            resources: [
              { title: "Decision Trees Tutorial", link: "https://www.analyticsvidhya.com/blog/2021/05/decision-tree-algorithm/" },
              { title: "Scikit-Learn Decision Trees", link: "https://scikit-learn.org/stable/modules/tree.html" },
            ],
          },
        ],
        related: ["unsupervised", "evaluation"],
      },
      {
        id: "unsupervised",
        title: "Unsupervised Learning Algorithms",
        description: "Learn clustering and dimensionality reduction.",
        subtopics: [
          {
            id: "k-means",
            title: "K-Means Clustering",
            description: "Partition data into clusters.",
            resources: [
              { title: "K-Means Clustering Explained", link: "https://towardsdatascience.com/k-means-clustering-algorithm-applications-evaluation-methods-and-drawbacks-aa03e644b48a" },
              { title: "Scikit-Learn K-Means", link: "https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html" },
            ],
          },
          {
            id: "hierarchical-clustering",
            title: "Hierarchical Clustering",
            description: "Build nested clusters.",
            resources: [
              { title: "Hierarchical Clustering Tutorial", link: "https://www.analyticsvidhya.com/blog/2019/05/beginners-guide-hierarchical-clustering/" },
              { title: "Scikit-Learn Hierarchical Clustering", link: "https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering" },
            ],
          },
          {
            id: "pca",
            title: "Principal Component Analysis (PCA)",
            description: "Reduce dimensionality of data.",
            resources: [
              { title: "PCA Explained", link: "https://towardsdatascience.com/a-one-stop-shop-for-principal-component-analysis-5582fb7e0a9c" },
              { title: "Scikit-Learn PCA", link: "https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html" },
            ],
          },
        ],
        related: ["supervised", "evaluation"],
      },
      {
        id: "evaluation",
        title: "Evaluation of ML Models",
        description: "Study metrics and techniques for model evaluation.",
        subtopics: [
          {
            id: "metrics",
            title: "Metrics",
            description: "Accuracy, precision, recall, and F1-score.",
            resources: [
              { title: "ML Metrics Explained", link: "https://towardsdatascience.com/understanding-confusion-matrix-and-performance-metrics-afd9e2e3b6f0" },
              { title: "Scikit-Learn Metrics", link: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
            ],
          },
          {
            id: "cross-validation",
            title: "Cross-Validation",
            description: "Assess model generalizability.",
            resources: [
              { title: "Cross-Validation Explained", link: "https://towardsdatascience.com/cross-validation-in-machine-learning-72924a69872f" },
              { title: "Scikit-Learn Cross-Validation", link: "https://scikit-learn.org/stable/modules/cross_validation.html" },
            ],
          },
          {
            id: "confusion-matrix",
            title: "Confusion Matrix",
            description: "Visualize classification performance.",
            resources: [
              { title: "Confusion Matrix Tutorial", link: "https://www.analyticsvidhya.com/blog/2020/04/confusion-matrix-machine-learning/" },
              { title: "Scikit-Learn Confusion Matrix", link: "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html" },
            ],
          },
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
          {
            id: "neural-networks",
            title: "Neural Networks",
            description: "Basics of feedforward and backpropagation.",
            resources: [
              { title: "Neural Networks Explained", link: "https://towardsdatascience.com/simple-introduction-to-neural-networks-ac1d7c3d7a2c" },
              { title: "Deep Learning Book", link: "https://www.deeplearningbook.org/" },
            ],
          },
          {
            id: "cnns",
            title: "CNNs",
            description: "Convolutional Neural Networks for image processing.",
            resources: [
              { title: "CNN Tutorial", link: "https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53" },
              { title: "Keras CNN Example", link: "https://keras.io/examples/vision/mnist_cnn/" },
            ],
          },
          {
            id: "rnns",
            title: "RNNs",
            description: "Recurrent Neural Networks for sequence modeling.",
            resources: [
              { title: "RNN Explained", link: "https://towardsdatascience.com/understanding-rnn-and-lstm-f7cdf6dfc14e" },
              { title: "Keras RNN Example", link: "https://keras.io/examples/timeseries/timeseries_classification_from_scratch/" },
            ],
          },
        ],
        related: ["nlp", "rl"],
      },
    ],
  },
};