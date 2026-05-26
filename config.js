// Configuration for Kaggle Explainer Video
export const CONFIG = {
  autoRecordOnLoad: false, // Set to true if you want the presentation to start recording immediately on load

  // Scene Configuration in logical learning order
  scenes: [
    { 
      name: "INTRO", 
      duration: 5000, 
      description: "Welcome to the ML Explainer",
      explanation: "Welcome to the Kaggle Contest Explainer. Visualizing how machine learning models work is crucial to building intuition and communicating results. We will walk through the core algorithms and concepts used in top Kaggle solutions.",
      subtitles: [
        { progress: 0, text: "Welcome to the <span style='color: #4cc9ff'>Kaggle Contest 3D Explainer</span>." },
        { progress: 35, text: "Visualizing models is key to building <span style='color: #00ff88'>intuition</span> and communicating results." },
        { progress: 70, text: "Let's explore the core algorithms used in <span style='color: #4cc9ff'>winning Kaggle solutions</span>!" }
      ]
    },
    { 
      name: "KAGGLER_PIPELINE", 
      duration: 6000, 
      description: "Kaggle Competition Pipeline",
      explanation: "A top Kaggle workflow starts with raw training data, extracts predictive features, trains individual models, ensembles them together, and submits predictions to the Leaderboard. Light pulses show data progressing through this flow.",
      subtitles: [
        { progress: 0, text: "Every Kaggle solution starts with an end-to-end <span style='color: #4cc9ff'>data pipeline</span>." },
        { progress: 25, text: "We load Raw Data, perform <span style='color: #00ff88'>Feature Engineering</span>, and train Models." },
        { progress: 50, text: "These models are combined using <span style='color: #00ff88'>Ensembling</span> and Blending." },
        { progress: 75, text: "Finally, we submit predictions to the <span style='color: #4cc9ff'>Leaderboard</span>!" }
      ]
    },
    { 
      name: "BIAS_VARIANCE", 
      duration: 6000, 
      description: "Bias-Variance Tradeoff",
      explanation: "Generalization vs Overfitting. High Bias (Underfit, left target) consistently misses the bullseye. High Variance (Overfit, right target) scatters predictions widely. Balanced (Optimal, center target) clusters tightly on the bullseye.",
      subtitles: [
        { progress: 0, text: "The <span style='color: #4cc9ff'>Bias-Variance tradeoff</span> is fundamental to model performance." },
        { progress: 25, text: "<span style='color: #ff4444'>High Bias</span> (left target) is underfitting — it consistently misses the bullseye." },
        { progress: 50, text: "<span style='color: #ffaa00'>High Variance</span> (right target) is overfitting — predictions scatter widely." },
        { progress: 75, text: "A <span style='color: #00ff88'>Balanced</span> model (center target) hits the bullseye and generalizes well!" }
      ]
    },
    { 
      name: "CROSS_VALIDATION", 
      duration: 6000, 
      description: "K-Fold Cross-Validation",
      explanation: "To avoid leaderboard overfitting, we divide our training dataset into K folds. Sequentially, one fold is held out as validation (lime) and the other K-1 folds train the model (blue), ensuring reliable score estimation.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>K-Fold Cross-Validation</span> ensures robust evaluation without overfitting." },
        { progress: 25, text: "We partition the dataset into <span style='color: #00ff88'>K equal blocks</span> (folds)." },
        { progress: 50, text: "K-1 folds <span style='color: #4cc9ff'>train</span> the model, while 1 fold <span style='color: #00ff88'>validates</span> it." },
        { progress: 75, text: "Rotating the validation fold provides a highly reliable <span style='color: #4cc9ff'>score estimate</span>." }
      ]
    },
    { 
      name: "LINEAR_REGRESSION", 
      duration: 6000, 
      description: "Linear Regression fitting",
      explanation: "Linear Regression fits a straight line of best fit to predict continuous values. It measures vertical error lines (residuals) from points to the line, and rotates to minimize the Sum of Squared Errors until it turns green.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>Linear Regression</span> fits a straight line to predict continuous outcomes." },
        { progress: 25, text: "We measure vertical errors, or <span style='color: #ffaa00'>residuals</span>, from points to the line." },
        { progress: 50, text: "The model shifts to <span style='color: #00ff88'>minimize</span> the Sum of Squared Errors." },
        { progress: 75, text: "The line turns <span style='color: #00ff88'>green</span> when it finds the optimal fit." }
      ]
    },
    { 
      name: "LOGISTIC", 
      duration: 6000, 
      description: "Logistic Regression learning",
      explanation: "Logistic Regression finds a linear boundary separating classes. The boundary starts incorrect (red), then Gradient Descent adjustments align it perfectly to separate the Cyan and Lime clusters, turning Green.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>Logistic Regression</span> finds a linear boundary to separate classes." },
        { progress: 25, text: "The decision boundary initially starts in an <span style='color: #ff4444'>incorrect position</span>." },
        { progress: 50, text: "<span style='color: #00ff88'>Gradient Descent</span> updates weights to shift and rotate the boundary." },
        { progress: 75, text: "It turns <span style='color: #00ff88'>green</span> once it perfectly separates the two clusters." }
      ]
    },
    { 
      name: "REGULARIZATION", 
      duration: 6000, 
      description: "L1 & L2 Regularization",
      explanation: "Regularization prevents overfitting by penalizing large weights. Ridge (L2) adds a circular penalty constraint, while Lasso (L1) adds a diamond-shaped constraint. We see loss contours expand until they touch the constraint boundaries, showing how Lasso drives some coefficients to exactly zero.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>Regularization</span> penalizes large weights to prevent overfitting." },
        { progress: 25, text: "<span style='color: #00ff88'>Ridge (L2)</span> uses a circular penalty, shrinking weights evenly." },
        { progress: 50, text: "<span style='color: #4cc9ff'>Lasso (L1)</span> uses a diamond penalty, driving some weights exactly to zero." },
        { progress: 75, text: "This built-in <span style='color: #00ff88'>feature selection</span> makes Lasso great for sparse data." }
      ]
    },
    { 
      name: "DECISION_TREE", 
      duration: 6000, 
      description: "Decision Tree splits",
      explanation: "A Decision Tree splits data recursively. Raw samples flow from the top root node, split down branches based on feature thresholds, and sort into left (cyan) or right (lime) leaves, making a final classification.",
      subtitles: [
        { progress: 0, text: "A <span style='color: #00ff88'>Decision Tree</span> splits data recursively to make classifications." },
        { progress: 25, text: "Data flows from the <span style='color: #4cc9ff'>root node</span> down split branches." },
        { progress: 55, text: "At each node, a <span style='color: #ffaa00'>feature threshold</span> divides the data." },
        { progress: 75, text: "Samples reach the <span style='color: #00ff88'>leaves</span> to form final predictions." }
      ]
    },
    { 
      name: "RANDOM_FOREST", 
      duration: 6000, 
      description: "Random Forest Ensemble",
      explanation: "A Random Forest is a bagging ensemble of independent decision trees. A data point traverses 5 separate trees, each voting Cyan or Lime. The majority vote (shown in the register at the bottom) wins, reducing variance.",
      subtitles: [
        { progress: 0, text: "A <span style='color: #00ff88'>Random Forest</span> is an ensemble of independent decision trees." },
        { progress: 25, text: "We feed a data point into multiple <span style='color: #4cc9ff'>randomly trained</span> trees." },
        { progress: 50, text: "Each tree makes an independent vote for <span style='color: #4cc9ff'>Cyan</span> or <span style='color: #00ff88'>Lime</span>." },
        { progress: 75, text: "The <span style='color: #00ff88'>majority vote wins</span>, creating a stable, low-variance model." }
      ]
    },
    { 
      name: "XGBOOST", 
      duration: 6000, 
      description: "XGBoost Gradient Boosting",
      explanation: "XGBoost builds trees sequentially. The first tree fits the target data. The remaining residual error (y-axis dispersion) is calculated, and the second tree is trained specifically on those residuals, shrinking the error to near-zero.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>XGBoost</span> uses Gradient Boosting to train trees sequentially." },
        { progress: 25, text: "The first tree fits the data, leaving behind <span style='color: #ffaa00'>residual errors</span>." },
        { progress: 50, text: "The next tree is trained <span style='color: #00ff88'>directly on those residuals</span>." },
        { progress: 75, text: "Sequential boosting shrinks the overall error to <span style='color: #4cc9ff'>near-zero</span>!" }
      ]
    },
    { 
      name: "SVM", 
      duration: 6000, 
      description: "Support Vector Machines",
      explanation: "Support Vector Machines (SVM) find a decision boundary plane that maximizes the margin (gap) between classes. The closest boundary-defining points are called Support Vectors, shown here with glowing rings.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>Support Vector Machines</span> find a boundary maximizing class separation." },
        { progress: 25, text: "We highlight <span style='color: #00ff88'>Support Vectors</span>, the critical points nearest the boundary." },
        { progress: 50, text: "The <span style='color: #ffaa00'>margins</span> expand outwards from the boundary line." },
        { progress: 75, text: "The boundary locks in place once it <span style='color: #00ff88'>maximizes the margin gap</span>!" }
      ]
    },
    { 
      name: "KNN", 
      duration: 6000, 
      description: "K-Nearest Neighbors",
      explanation: "K-Nearest Neighbors (KNN) classifies query points based on proximity. A circular radar sweeps outward from a query point in the center, draws connections (yellow lines) to the K=5 nearest neighbors, and classifies by majority vote.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>K-Nearest Neighbors</span> classifies data strictly based on proximity." },
        { progress: 25, text: "A radar sweep expands from the query point to <span style='color: #00ff88'>measure distances</span>." },
        { progress: 50, text: "It identifies the <span style='color: #ffaa00'>K=5 closest points</span> (yellow lines)." },
        { progress: 75, text: "The query point inherits the <span style='color: #00ff88'>majority class</span> of its neighbors!" }
      ]
    },
    { 
      name: "NAIVE_BAYES", 
      duration: 6000, 
      description: "Naive Bayes classifier",
      explanation: "Naive Bayes calculates the probability of each class given features using Bayes' Theorem. It assumes features are conditionally independent. Overlapping Gaussian curves show probability densities for classes, and we sweep a query line to find relative likelihoods.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>Naive Bayes</span> is a probabilistic classifier based on Bayes' Theorem." },
        { progress: 25, text: "It assumes <span style='color: #00ff88'>feature independence</span> for simple, fast calculations." },
        { progress: 50, text: "Overlapping curves show the <span style='color: #4cc9ff'>probability distributions</span> of classes." },
        { progress: 75, text: "We compare likelihoods to determine the most <span style='color: #00ff88'>probable class</span>." }
      ]
    },
    { 
      name: "NEURAL_NET", 
      duration: 6000, 
      description: "Deep Neural Network",
      explanation: "Deep Learning models layers of neurons. Glowing cyan pulses propagate left-to-right (Forward Pass) triggering activations. Glowing magenta pulses propagate right-to-left (Backpropagation), updating weights to minimize loss.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>Deep Neural Networks</span> model complex, non-linear relationships." },
        { progress: 25, text: "In the <span style='color: #4cc9ff'>Forward Pass</span>, inputs propagate left-to-right (Cyan)." },
        { progress: 50, text: "Neurons calculate activations using <span style='color: #00ff88'>weights and biases</span>." },
        { progress: 75, text: "<span style='color: #ff00ff'>Backpropagation</span> runs in reverse (Magenta) to minimize loss!" }
      ]
    },
    { 
      name: "KMEANS", 
      duration: 6000, 
      description: "K-Means Clustering",
      explanation: "K-Means partitions data into clusters. Centroids (Red, Green, Blue spheres) start in random positions. Step-by-step, points are assigned to the nearest centroid (changing color) and centroids move to cluster centers.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>K-Means</span> is an unsupervised clustering algorithm." },
        { progress: 25, text: "Points are assigned to the <span style='color: #00ff88'>nearest centroid</span>." },
        { progress: 50, text: "Centroids recalculate and move to the <span style='color: #4cc9ff'>center</span> of their clusters." },
        { progress: 75, text: "This repeats iteratively until all clusters <span style='color: #00ff88'>stabilize</span>!" }
      ]
    },
    { 
      name: "PCA", 
      duration: 6000, 
      description: "Principal Component Analysis",
      explanation: "PCA reduces dimensionality by projecting data onto orthogonal principal axes of maximum variance. PC1 (cyan arrow) and PC2 (lime arrow) define the 2D plane onto which the 3D cloud collapses, preserving maximum information.",
      subtitles: [
        { progress: 0, text: "<span style='color: #4cc9ff'>Principal Component Analysis</span> reduces dataset dimensionality." },
        { progress: 25, text: "We identify orthogonal axes of <span style='color: #00ff88'>maximum variance</span> (PC1 & PC2)." },
        { progress: 50, text: "The 3D point cloud <span style='color: #4cc9ff'>collapses</span> onto this 2D plane." },
        { progress: 75, text: "This projection preserves maximum information in a <span style='color: #00ff88'>lower dimension</span>!" }
      ]
    },
    { 
      name: "EVALUATION", 
      duration: 6000, 
      description: "ROC Curve Evaluation",
      explanation: "We evaluate classifier performance using the Receiver Operating Characteristic (ROC) curve. It plots the True Positive Rate against the False Positive Rate. The Area Under the Curve (AUC) measures overall classification quality.",
      subtitles: [
        { progress: 0, text: "We evaluate classification models using the <span style='color: #4cc9ff'>ROC Curve</span>." },
        { progress: 25, text: "It plots the <span style='color: #00ff88'>True Positive Rate</span> vs. <span style='color: #ff4444'>False Positive Rate</span>." },
        { progress: 50, text: "A random classifier is diagonal, but a <span style='color: #4cc9ff'>good model curves up</span>." },
        { progress: 75, text: "The <span style='color: #00ff88'>Area Under the Curve (AUC)</span> measures overall performance." }
      ]
    },
    { 
      name: "ENDING", 
      duration: 5000, 
      description: "Submit to Kaggle!",
      explanation: "You're now ready to explain and submit your models. Building clear visualizations of your pipeline is the key to winning Kaggle contests and landing ML jobs. Happy coding!",
      subtitles: [
        { progress: 0, text: "You are now ready to build and submit <span style='color: #4cc9ff'>top-tier models</span> to Kaggle!" },
        { progress: 35, text: "<span style='color: #00ff88'>Interactive visualizations</span> are the key to presenting your work." },
        { progress: 70, text: "Good luck on your machine learning journey, and <span style='color: #4cc9ff'>happy coding</span>!" }
      ]
    },
  ],

  // Timing settings
  sceneSwitchDuration: 6000, // Default duration if not specified
  transitionDuration: 1000, // milliseconds

  // Camera Settings
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    defaultZ: 20,
  },

  // Particle Settings
  particles: {
    count: 5000,
    size: 0.2,
    color: "#4cc9ff",
    opacity: 0.8,
  },

  // Neural Network Settings
  neuralNetwork: {
    nodeCount: 60,
    connectionCount: 100,
    nodeSize: 0.15,
    nodeColor: "#00ffff",
    lineColor: "#4cc9ff",
    lineOpacity: 0.3,
  },

  // Decision Tree Settings
  decisionTree: {
    nodeCount: 25,
    nodeSize: 0.3,
    nodeColor: "#00ff88",
  },

  // Animation Speed
  animationSpeed: {
    particleRotation: 0.0005,
    cameraOrbit: 0.005,
  },

  // Video Export Settings
  videoExport: {
    fps: 30,
    bitrate: "5000k",
    codec: "libx264",
  },

  // Colors
  colors: {
    background: "#000000",
    primary: "#4cc9ff",
    accent: "#00ff88",
    cyan: "#00ffff",
    lime: "#00ff88",
  },
}

export default CONFIG;
