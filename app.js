// Pattern data
const PATTERNS_DATA = {
  "patterns": [
    {
      "id": 1,
      "name": "Prefix Sum",
      "description": "Efficient sum queries on subarrays using preprocessing",
      "problems": {
        "easy": [
          {"name": "Running Sum of 1d Array", "link": "https://leetcode.com/problems/running-sum-of-1d-array/"},
          {"name": "Range Sum Query - Immutable", "link": "https://leetcode.com/problems/range-sum-query-immutable/"},
          {"name": "Find Pivot Index", "link": "https://leetcode.com/problems/find-pivot-index/"},
          {"name": "Sum of All Odd Length Subarrays", "link": "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/"},
          {"name": "Minimum Value to Get Positive Step by Step Sum", "link": "https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/"}
        ],
        "medium": [
          {"name": "Subarray Sum Equals K", "link": "https://leetcode.com/problems/subarray-sum-equals-k/"},
          {"name": "Range Sum Query 2D - Immutable", "link": "https://leetcode.com/problems/range-sum-query-2d-immutable/"},
          {"name": "Continuous Subarray Sum", "link": "https://leetcode.com/problems/continuous-subarray-sum/"},
          {"name": "Product of Array Except Self", "link": "https://leetcode.com/problems/product-of-array-except-self/"},
          {"name": "Subarray Sums Divisible by K", "link": "https://leetcode.com/problems/subarray-sums-divisible-by-k/"}
        ],
        "hard": [
          {"name": "Maximum Sum of 3 Non-Overlapping Subarrays", "link": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/"},
          {"name": "Count of Range Sum", "link": "https://leetcode.com/problems/count-of-range-sum/"},
          {"name": "Minimum Number of Taps to Open to Water a Garden", "link": "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/"},
          {"name": "Shortest Subarray with Sum at Least K", "link": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/"},
          {"name": "Maximum Score of Spliced Array", "link": "https://leetcode.com/problems/maximum-score-of-spliced-array/"}
        ]
      }
    },
    {
      "id": 2,
      "name": "Two Pointers",
      "description": "Use two pointers to find pairs or elements meeting criteria",
      "problems": {
        "easy": [
          {"name": "Two Sum II - Input Array Is Sorted", "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"},
          {"name": "Valid Palindrome", "link": "https://leetcode.com/problems/valid-palindrome/"},
          {"name": "Remove Duplicates from Sorted Array", "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"},
          {"name": "Move Zeroes", "link": "https://leetcode.com/problems/move-zeroes/"},
          {"name": "Squares of a Sorted Array", "link": "https://leetcode.com/problems/squares-of-a-sorted-array/"}
        ],
        "medium": [
          {"name": "3Sum", "link": "https://leetcode.com/problems/3sum/"},
          {"name": "Container With Most Water", "link": "https://leetcode.com/problems/container-with-most-water/"},
          {"name": "Sort Colors", "link": "https://leetcode.com/problems/sort-colors/"},
          {"name": "4Sum", "link": "https://leetcode.com/problems/4sum/"},
          {"name": "Remove Duplicates from Sorted Array II", "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/"}
        ],
        "hard": [
          {"name": "Trapping Rain Water", "link": "https://leetcode.com/problems/trapping-rain-water/"},
          {"name": "Minimum Window Substring", "link": "https://leetcode.com/problems/minimum-window-substring/"},
          {"name": "Substring with Concatenation of All Words", "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/"},
          {"name": "4Sum II", "link": "https://leetcode.com/problems/4sum-ii/"},
          {"name": "Longest Duplicate Substring", "link": "https://leetcode.com/problems/longest-duplicate-substring/"}
        ]
      }
    },
    {
      "id": 3,
      "name": "Sliding Window",
      "description": "Find subarrays or substrings satisfying specific conditions",
      "problems": {
        "easy": [
          {"name": "Maximum Average Subarray I", "link": "https://leetcode.com/problems/maximum-average-subarray-i/"},
          {"name": "Contains Duplicate II", "link": "https://leetcode.com/problems/contains-duplicate-ii/"},
          {"name": "Minimum Difference Between Highest and Lowest of K Scores", "link": "https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/"},
          {"name": "Defanging an IP Address", "link": "https://leetcode.com/problems/defanging-an-ip-address/"},
          {"name": "Find All Numbers Disappeared in an Array", "link": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"}
        ],
        "medium": [
          {"name": "Longest Substring Without Repeating Characters", "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"},
          {"name": "Longest Repeating Character Replacement", "link": "https://leetcode.com/problems/longest-repeating-character-replacement/"},
          {"name": "Permutation in String", "link": "https://leetcode.com/problems/permutation-in-string/"},
          {"name": "Fruit Into Baskets", "link": "https://leetcode.com/problems/fruit-into-baskets/"},
          {"name": "Max Consecutive Ones III", "link": "https://leetcode.com/problems/max-consecutive-ones-iii/"}
        ],
        "hard": [
          {"name": "Minimum Window Substring", "link": "https://leetcode.com/problems/minimum-window-substring/"},
          {"name": "Sliding Window Maximum", "link": "https://leetcode.com/problems/sliding-window-maximum/"},
          {"name": "Minimum Number of K Consecutive Bit Flips", "link": "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/"},
          {"name": "Subarrays with K Different Integers", "link": "https://leetcode.com/problems/subarrays-with-k-different-integers/"},
          {"name": "Substring with Concatenation of All Words", "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/"}
        ]
      }
    },
    {
      "id": 4,
      "name": "Fast & Slow Pointers",
      "description": "Detect cycles and find patterns using different speeds",
      "problems": {
        "easy": [
          {"name": "Linked List Cycle", "link": "https://leetcode.com/problems/linked-list-cycle/"},
          {"name": "Middle of the Linked List", "link": "https://leetcode.com/problems/middle-of-the-linked-list/"},
          {"name": "Remove Linked List Elements", "link": "https://leetcode.com/problems/remove-linked-list-elements/"},
          {"name": "Palindrome Linked List", "link": "https://leetcode.com/problems/palindrome-linked-list/"},
          {"name": "Happy Number", "link": "https://leetcode.com/problems/happy-number/"}
        ],
        "medium": [
          {"name": "Linked List Cycle II", "link": "https://leetcode.com/problems/linked-list-cycle-ii/"},
          {"name": "Find the Duplicate Number", "link": "https://leetcode.com/problems/find-the-duplicate-number/"},
          {"name": "Circular Array Loop", "link": "https://leetcode.com/problems/circular-array-loop/"},
          {"name": "Remove Nth Node From End of List", "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"},
          {"name": "Rotate List", "link": "https://leetcode.com/problems/rotate-list/"}
        ],
        "hard": [
          {"name": "First Missing Positive", "link": "https://leetcode.com/problems/first-missing-positive/"},
          {"name": "Find All Duplicates in an Array", "link": "https://leetcode.com/problems/find-all-duplicates-in-an-array/"},
          {"name": "Linked List Cycle III", "link": "https://leetcode.com/problems/linked-list-cycle-iii/"},
          {"name": "Split Linked List in Parts", "link": "https://leetcode.com/problems/split-linked-list-in-parts/"},
          {"name": "Design Linked List", "link": "https://leetcode.com/problems/design-linked-list/"}
        ]
      }
    },
    {
      "id": 5,
      "name": "LinkedList In-place Reversal",
      "description": "Reverse parts of linked list without extra space",
      "problems": {
        "easy": [
          {"name": "Reverse Linked List", "link": "https://leetcode.com/problems/reverse-linked-list/"},
          {"name": "Palindrome Linked List", "link": "https://leetcode.com/problems/palindrome-linked-list/"},
          {"name": "Merge Two Sorted Lists", "link": "https://leetcode.com/problems/merge-two-sorted-lists/"},
          {"name": "Remove Duplicates from Sorted List", "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/"},
          {"name": "Delete Node in a Linked List", "link": "https://leetcode.com/problems/delete-node-in-a-linked-list/"}
        ],
        "medium": [
          {"name": "Reverse Linked List II", "link": "https://leetcode.com/problems/reverse-linked-list-ii/"},
          {"name": "Swap Nodes in Pairs", "link": "https://leetcode.com/problems/swap-nodes-in-pairs/"},
          {"name": "Rotate List", "link": "https://leetcode.com/problems/rotate-list/"},
          {"name": "Reverse Nodes in k-Group", "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/"},
          {"name": "Add Two Numbers", "link": "https://leetcode.com/problems/add-two-numbers/"}
        ],
        "hard": [
          {"name": "Reverse Nodes in k-Group", "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/"},
          {"name": "Merge k Sorted Lists", "link": "https://leetcode.com/problems/merge-k-sorted-lists/"},
          {"name": "Copy List with Random Pointer", "link": "https://leetcode.com/problems/copy-list-with-random-pointer/"},
          {"name": "LRU Cache", "link": "https://leetcode.com/problems/lru-cache/"},
          {"name": "Design Browser History", "link": "https://leetcode.com/problems/design-browser-history/"}
        ]
      }
    },
    {
      "id": 6,
      "name": "Monotonic Stack",
      "description": "Find next greater/smaller elements efficiently",
      "problems": {
        "easy": [
          {"name": "Next Greater Element I", "link": "https://leetcode.com/problems/next-greater-element-i/"},
          {"name": "Baseball Game", "link": "https://leetcode.com/problems/baseball-game/"},
          {"name": "Valid Parentheses", "link": "https://leetcode.com/problems/valid-parentheses/"},
          {"name": "Remove All Adjacent Duplicates In String", "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/"},
          {"name": "Min Stack", "link": "https://leetcode.com/problems/min-stack/"}
        ],
        "medium": [
          {"name": "Daily Temperatures", "link": "https://leetcode.com/problems/daily-temperatures/"},
          {"name": "Next Greater Element II", "link": "https://leetcode.com/problems/next-greater-element-ii/"},
          {"name": "Online Stock Span", "link": "https://leetcode.com/problems/online-stock-span/"},
          {"name": "Remove K Digits", "link": "https://leetcode.com/problems/remove-k-digits/"},
          {"name": "Asteroid Collision", "link": "https://leetcode.com/problems/asteroid-collision/"}
        ],
        "hard": [
          {"name": "Largest Rectangle in Histogram", "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/"},
          {"name": "Maximal Rectangle", "link": "https://leetcode.com/problems/maximal-rectangle/"},
          {"name": "Trapping Rain Water", "link": "https://leetcode.com/problems/trapping-rain-water/"},
          {"name": "Basic Calculator", "link": "https://leetcode.com/problems/basic-calculator/"},
          {"name": "Remove Duplicate Letters", "link": "https://leetcode.com/problems/remove-duplicate-letters/"}
        ]
      }
    },
    {
      "id": 7,
      "name": "Top 'K' Elements",
      "description": "Find top k largest/smallest elements using heaps",
      "problems": {
        "easy": [
          {"name": "Kth Largest Element in a Stream", "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/"},
          {"name": "Last Stone Weight", "link": "https://leetcode.com/problems/last-stone-weight/"},
          {"name": "Relative Ranks", "link": "https://leetcode.com/problems/relative-ranks/"},
          {"name": "Find K Pairs with Smallest Sums", "link": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"},
          {"name": "The K Weakest Rows in a Matrix", "link": "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"}
        ],
        "medium": [
          {"name": "Kth Largest Element in an Array", "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/"},
          {"name": "Top K Frequent Elements", "link": "https://leetcode.com/problems/top-k-frequent-elements/"},
          {"name": "K Closest Points to Origin", "link": "https://leetcode.com/problems/k-closest-points-to-origin/"},
          {"name": "Sort Characters By Frequency", "link": "https://leetcode.com/problems/sort-characters-by-frequency/"},
          {"name": "Find K Closest Elements", "link": "https://leetcode.com/problems/find-k-closest-elements/"}
        ],
        "hard": [
          {"name": "Find Median from Data Stream", "link": "https://leetcode.com/problems/find-median-from-data-stream/"},
          {"name": "Sliding Window Median", "link": "https://leetcode.com/problems/sliding-window-median/"},
          {"name": "IPO", "link": "https://leetcode.com/problems/ipo/"},
          {"name": "Rearrange String k Distance Apart", "link": "https://leetcode.com/problems/rearrange-string-k-distance-apart/"},
          {"name": "Maximum Frequency Stack", "link": "https://leetcode.com/problems/maximum-frequency-stack/"}
        ]
      }
    },
    {
      "id": 8,
      "name": "Overlapping Intervals",
      "description": "Merge and handle overlapping intervals efficiently",
      "problems": {
        "easy": [
          {"name": "Meeting Rooms", "link": "https://leetcode.com/problems/meeting-rooms/"},
          {"name": "Merge Sorted Array", "link": "https://leetcode.com/problems/merge-sorted-array/"},
          {"name": "Interval List Intersections", "link": "https://leetcode.com/problems/interval-list-intersections/"},
          {"name": "Summary Ranges", "link": "https://leetcode.com/problems/summary-ranges/"},
          {"name": "Teemo Attacking", "link": "https://leetcode.com/problems/teemo-attacking/"}
        ],
        "medium": [
          {"name": "Merge Intervals", "link": "https://leetcode.com/problems/merge-intervals/"},
          {"name": "Insert Interval", "link": "https://leetcode.com/problems/insert-interval/"},
          {"name": "Non-overlapping Intervals", "link": "https://leetcode.com/problems/non-overlapping-intervals/"},
          {"name": "Meeting Rooms II", "link": "https://leetcode.com/problems/meeting-rooms-ii/"},
          {"name": "Task Scheduler", "link": "https://leetcode.com/problems/task-scheduler/"}
        ],
        "hard": [
          {"name": "Employee Free Time", "link": "https://leetcode.com/problems/employee-free-time/"},
          {"name": "Data Stream as Disjoint Intervals", "link": "https://leetcode.com/problems/data-stream-as-disjoint-intervals/"},
          {"name": "Range Module", "link": "https://leetcode.com/problems/range-module/"},
          {"name": "My Calendar III", "link": "https://leetcode.com/problems/my-calendar-iii/"},
          {"name": "Minimum Number of Arrows to Burst Balloons", "link": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"}
        ]
      }
    },
    {
      "id": 9,
      "name": "Modified Binary Search",
      "description": "Adapt binary search for rotated arrays and search spaces",
      "problems": {
        "easy": [
          {"name": "Binary Search", "link": "https://leetcode.com/problems/binary-search/"},
          {"name": "First Bad Version", "link": "https://leetcode.com/problems/first-bad-version/"},
          {"name": "Search Insert Position", "link": "https://leetcode.com/problems/search-insert-position/"},
          {"name": "Guess Number Higher or Lower", "link": "https://leetcode.com/problems/guess-number-higher-or-lower/"},
          {"name": "Peak Index in a Mountain Array", "link": "https://leetcode.com/problems/peak-index-in-a-mountain-array/"}
        ],
        "medium": [
          {"name": "Search in Rotated Sorted Array", "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/"},
          {"name": "Find Minimum in Rotated Sorted Array", "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"},
          {"name": "Search a 2D Matrix", "link": "https://leetcode.com/problems/search-a-2d-matrix/"},
          {"name": "Find Peak Element", "link": "https://leetcode.com/problems/find-peak-element/"},
          {"name": "Time Based Key-Value Store", "link": "https://leetcode.com/problems/time-based-key-value-store/"}
        ],
        "hard": [
          {"name": "Search in Rotated Sorted Array II", "link": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"},
          {"name": "Find Minimum in Rotated Sorted Array II", "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/"},
          {"name": "Median of Two Sorted Arrays", "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/"},
          {"name": "Split Array Largest Sum", "link": "https://leetcode.com/problems/split-array-largest-sum/"},
          {"name": "Koko Eating Bananas", "link": "https://leetcode.com/problems/koko-eating-bananas/"}
        ]
      }
    },
    {
      "id": 10,
      "name": "Binary Tree Traversal",
      "description": "PreOrder, InOrder, PostOrder traversal techniques",
      "problems": {
        "easy": [
          {"name": "Binary Tree Inorder Traversal", "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"},
          {"name": "Binary Tree Preorder Traversal", "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/"},
          {"name": "Binary Tree Postorder Traversal", "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/"},
          {"name": "Maximum Depth of Binary Tree", "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"},
          {"name": "Same Tree", "link": "https://leetcode.com/problems/same-tree/"}
        ],
        "medium": [
          {"name": "Validate Binary Search Tree", "link": "https://leetcode.com/problems/validate-binary-search-tree/"},
          {"name": "Binary Tree Level Order Traversal", "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/"},
          {"name": "Construct Binary Tree from Preorder and Inorder", "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"},
          {"name": "Binary Tree Right Side View", "link": "https://leetcode.com/problems/binary-tree-right-side-view/"},
          {"name": "Kth Smallest Element in a BST", "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"}
        ],
        "hard": [
          {"name": "Binary Tree Maximum Path Sum", "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"},
          {"name": "Serialize and Deserialize Binary Tree", "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},
          {"name": "Binary Tree Postorder Traversal", "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/"},
          {"name": "Recover Binary Search Tree", "link": "https://leetcode.com/problems/recover-binary-search-tree/"},
          {"name": "Count Complete Tree Nodes", "link": "https://leetcode.com/problems/count-complete-tree-nodes/"}
        ]
      }
    },
    {
      "id": 11,
      "name": "Depth-First Search (DFS)",
      "description": "Explore paths and branches in graphs and trees",
      "problems": {
        "easy": [
          {"name": "Binary Tree Paths", "link": "https://leetcode.com/problems/binary-tree-paths/"},
          {"name": "Path Sum", "link": "https://leetcode.com/problems/path-sum/"},
          {"name": "Symmetric Tree", "link": "https://leetcode.com/problems/symmetric-tree/"},
          {"name": "Invert Binary Tree", "link": "https://leetcode.com/problems/invert-binary-tree/"},
          {"name": "Subtree of Another Tree", "link": "https://leetcode.com/problems/subtree-of-another-tree/"}
        ],
        "medium": [
          {"name": "Path Sum II", "link": "https://leetcode.com/problems/path-sum-ii/"},
          {"name": "Number of Islands", "link": "https://leetcode.com/problems/number-of-islands/"},
          {"name": "Clone Graph", "link": "https://leetcode.com/problems/clone-graph/"},
          {"name": "Course Schedule", "link": "https://leetcode.com/problems/course-schedule/"},
          {"name": "Target Sum", "link": "https://leetcode.com/problems/target-sum/"}
        ],
        "hard": [
          {"name": "Word Ladder II", "link": "https://leetcode.com/problems/word-ladder-ii/"},
          {"name": "Sudoku Solver", "link": "https://leetcode.com/problems/sudoku-solver/"},
          {"name": "N-Queens", "link": "https://leetcode.com/problems/n-queens/"},
          {"name": "Word Search II", "link": "https://leetcode.com/problems/word-search-ii/"},
          {"name": "Alien Dictionary", "link": "https://leetcode.com/problems/alien-dictionary/"}
        ]
      }
    },
    {
      "id": 12,
      "name": "Breadth-First Search (BFS)",
      "description": "Level by level traversal for shortest paths",
      "problems": {
        "easy": [
          {"name": "Binary Tree Level Order Traversal II", "link": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/"},
          {"name": "Average of Levels in Binary Tree", "link": "https://leetcode.com/problems/average-of-levels-in-binary-tree/"},
          {"name": "Minimum Depth of Binary Tree", "link": "https://leetcode.com/problems/minimum-depth-of-binary-tree/"},
          {"name": "N-ary Tree Level Order Traversal", "link": "https://leetcode.com/problems/n-ary-tree-level-order-traversal/"},
          {"name": "Find Bottom Left Tree Value", "link": "https://leetcode.com/problems/find-bottom-left-tree-value/"}
        ],
        "medium": [
          {"name": "Binary Tree Level Order Traversal", "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/"},
          {"name": "Binary Tree Zigzag Level Order Traversal", "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},
          {"name": "Rotting Oranges", "link": "https://leetcode.com/problems/rotting-oranges/"},
          {"name": "Word Ladder", "link": "https://leetcode.com/problems/word-ladder/"},
          {"name": "Perfect Squares", "link": "https://leetcode.com/problems/perfect-squares/"}
        ],
        "hard": [
          {"name": "Word Ladder II", "link": "https://leetcode.com/problems/word-ladder-ii/"},
          {"name": "Minimum Moves to Reach Target with Rotations", "link": "https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/"},
          {"name": "Cut Off Trees for Golf Event", "link": "https://leetcode.com/problems/cut-off-trees-for-golf-event/"},
          {"name": "Bus Routes", "link": "https://leetcode.com/problems/bus-routes/"},
          {"name": "Sliding Puzzle", "link": "https://leetcode.com/problems/sliding-puzzle/"}
        ]
      }
    },
    {
      "id": 13,
      "name": "Matrix Traversal",
      "description": "Traverse 2D grids using DFS, BFS, and other techniques",
      "problems": {
        "easy": [
          {"name": "Flood Fill", "link": "https://leetcode.com/problems/flood-fill/"},
          {"name": "Island Perimeter", "link": "https://leetcode.com/problems/island-perimeter/"},
          {"name": "Reshape the Matrix", "link": "https://leetcode.com/problems/reshape-the-matrix/"},
          {"name": "Toeplitz Matrix", "link": "https://leetcode.com/problems/toeplitz-matrix/"},
          {"name": "Special Positions in a Binary Matrix", "link": "https://leetcode.com/problems/special-positions-in-a-binary-matrix/"}
        ],
        "medium": [
          {"name": "Number of Islands", "link": "https://leetcode.com/problems/number-of-islands/"},
          {"name": "Spiral Matrix", "link": "https://leetcode.com/problems/spiral-matrix/"},
          {"name": "Set Matrix Zeroes", "link": "https://leetcode.com/problems/set-matrix-zeroes/"},
          {"name": "Rotate Image", "link": "https://leetcode.com/problems/rotate-image/"},
          {"name": "Word Search", "link": "https://leetcode.com/problems/word-search/"}
        ],
        "hard": [
          {"name": "Word Search II", "link": "https://leetcode.com/problems/word-search-ii/"},
          {"name": "Sudoku Solver", "link": "https://leetcode.com/problems/sudoku-solver/"},
          {"name": "N-Queens II", "link": "https://leetcode.com/problems/n-queens-ii/"},
          {"name": "Shortest Path in a Grid with Obstacles Elimination", "link": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/"},
          {"name": "Minimum Cost to Make at Least One Valid Path in a Grid", "link": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/"}
        ]
      }
    },
    {
      "id": 14,
      "name": "Backtracking",
      "description": "Explore all solutions and backtrack when paths fail",
      "problems": {
        "easy": [
          {"name": "Letter Case Permutation", "link": "https://leetcode.com/problems/letter-case-permutation/"},
          {"name": "Binary Watch", "link": "https://leetcode.com/problems/binary-watch/"},
          {"name": "Find All Numbers Disappeared in an Array", "link": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"},
          {"name": "Keyboard Row", "link": "https://leetcode.com/problems/keyboard-row/"},
          {"name": "Number of Segments in a String", "link": "https://leetcode.com/problems/number-of-segments-in-a-string/"}
        ],
        "medium": [
          {"name": "Permutations", "link": "https://leetcode.com/problems/permutations/"},
          {"name": "Combinations", "link": "https://leetcode.com/problems/combinations/"},
          {"name": "Subsets", "link": "https://leetcode.com/problems/subsets/"},
          {"name": "Generate Parentheses", "link": "https://leetcode.com/problems/generate-parentheses/"},
          {"name": "Letter Combinations of a Phone Number", "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"}
        ],
        "hard": [
          {"name": "N-Queens", "link": "https://leetcode.com/problems/n-queens/"},
          {"name": "Sudoku Solver", "link": "https://leetcode.com/problems/sudoku-solver/"},
          {"name": "Word Search II", "link": "https://leetcode.com/problems/word-search-ii/"},
          {"name": "Palindrome Partitioning II", "link": "https://leetcode.com/problems/palindrome-partitioning-ii/"},
          {"name": "Regular Expression Matching", "link": "https://leetcode.com/problems/regular-expression-matching/"}
        ]
      }
    },
    {
      "id": 15,
      "name": "Dynamic Programming",
      "description": "Break problems into subproblems for optimal solutions",
      "problems": {
        "easy": [
          {"name": "Climbing Stairs", "link": "https://leetcode.com/problems/climbing-stairs/"},
          {"name": "House Robber", "link": "https://leetcode.com/problems/house-robber/"},
          {"name": "Maximum Subarray", "link": "https://leetcode.com/problems/maximum-subarray/"},
          {"name": "Best Time to Buy and Sell Stock", "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},
          {"name": "Min Cost Climbing Stairs", "link": "https://leetcode.com/problems/min-cost-climbing-stairs/"}
        ],
        "medium": [
          {"name": "Coin Change", "link": "https://leetcode.com/problems/coin-change/"},
          {"name": "Longest Increasing Subsequence", "link": "https://leetcode.com/problems/longest-increasing-subsequence/"},
          {"name": "Word Break", "link": "https://leetcode.com/problems/word-break/"},
          {"name": "Unique Paths", "link": "https://leetcode.com/problems/unique-paths/"},
          {"name": "House Robber II", "link": "https://leetcode.com/problems/house-robber-ii/"}
        ],
        "hard": [
          {"name": "Edit Distance", "link": "https://leetcode.com/problems/edit-distance/"},
          {"name": "Regular Expression Matching", "link": "https://leetcode.com/problems/regular-expression-matching/"},
          {"name": "Longest Common Subsequence", "link": "https://leetcode.com/problems/longest-common-subsequence/"},
          {"name": "Maximum Product Subarray", "link": "https://leetcode.com/problems/maximum-product-subarray/"},
          {"name": "Burst Balloons", "link": "https://leetcode.com/problems/burst-balloons/"}
        ]
      }
    }
  ]
};

// Application state
let currentPattern = null;
let expandedSections = new Set();

// DOM elements
const homepage = document.getElementById('homepage');
const patternDetail = document.getElementById('patternDetail');
const patternsGrid = document.getElementById('patternsGrid');
const backBtn = document.getElementById('backBtn');
const homeBtn = document.getElementById('homeBtn');
const searchInput = document.getElementById('searchInput');
const patternTitle = document.getElementById('patternTitle');
const patternDescription = document.getElementById('patternDescription');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderHomepage();
    setupEventListeners();
});

// Render homepage with pattern cards
function renderHomepage() {
    patternsGrid.innerHTML = '';
    
    PATTERNS_DATA.patterns.forEach(pattern => {
        const card = createPatternCard(pattern);
        patternsGrid.appendChild(card);
    });
}

// Create pattern card element
function createPatternCard(pattern) {
    const card = document.createElement('div');
    card.className = 'pattern-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => showPatternDetail(pattern));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showPatternDetail(pattern);
        }
    });
    
    card.innerHTML = `
        <div class="pattern-number">Pattern ${pattern.id}</div>
        <h3 class="pattern-name">${pattern.name}</h3>
        <p class="pattern-desc">${pattern.description}</p>
    `;
    
    return card;
}

// Show pattern detail view
function showPatternDetail(pattern) {
    currentPattern = pattern;
    expandedSections.clear();
    
    // Update header content
    patternTitle.textContent = pattern.name;
    patternDescription.textContent = pattern.description;
    
    // Clear search
    searchInput.value = '';
    
    // Render problem sections
    renderProblemSections(pattern);
    
    // Switch views
    homepage.classList.add('hidden');
    patternDetail.classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Render problem sections
function renderProblemSections(pattern) {
    const difficulties = ['easy', 'medium', 'hard'];
    const difficultyLabels = ['Beginner', 'Intermediate', 'Advanced'];
    const sectionIds = ['easyProblemsList', 'mediumProblemsList', 'hardProblemsList'];
    
    difficulties.forEach((difficulty, index) => {
        const problemsList = document.getElementById(sectionIds[index]);
        const problems = pattern.problems[difficulty];
        
        problemsList.innerHTML = '';
        
        problems.forEach(problem => {
            const problemItem = createProblemItem(problem, difficulty);
            problemsList.appendChild(problemItem);
        });
        
        // Update problem count
        const countElement = document.getElementById(difficulty + 'Count');
        if (countElement) {
            countElement.textContent = `${problems.length} problems`;
        }
    });
}

// Create problem item element
function createProblemItem(problem, difficulty) {
    const item = document.createElement('div');
    item.className = 'problem-item';
    item.setAttribute('data-problem-name', problem.name.toLowerCase());
    
    item.innerHTML = `
        <h4 class="problem-name">${problem.name}</h4>
        <a href="${problem.link}" target="_blank" class="problem-link">
            Solve on LeetCode
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m9 18 6-6-6-6"/>
            </svg>
        </a>
    `;
    
    return item;
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    backBtn.addEventListener('click', showHomepage);
    homeBtn.addEventListener('click', showHomepage);
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Section toggle functionality
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', toggleSection);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !homepage.classList.contains('hidden')) {
            showHomepage();
        }
    });
}

// Show homepage
function showHomepage() {
    patternDetail.classList.add('hidden');
    homepage.classList.remove('hidden');
    currentPattern = null;
    expandedSections.clear();
    window.scrollTo(0, 0);
}

// Handle search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const problemItems = document.querySelectorAll('.problem-item');
    
    problemItems.forEach(item => {
        const problemName = item.getAttribute('data-problem-name');
        const isMatch = problemName.includes(searchTerm);
        
        if (isMatch) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
    
    // Update problem counts
    updateProblemCounts();
    
    // If searching, expand all sections to show results
    if (searchTerm) {
        expandAllSections();
    }
}

// Update problem counts after search
function updateProblemCounts() {
    const sections = ['easy', 'medium', 'hard'];
    
    sections.forEach(section => {
        const sectionElement = document.getElementById(section + 'ProblemsList');
        const visibleProblems = sectionElement.querySelectorAll('.problem-item:not(.hidden)');
        const countElement = document.getElementById(section + 'Count');
        
        if (countElement) {
            const totalProblems = sectionElement.querySelectorAll('.problem-item').length;
            const visibleCount = visibleProblems.length;
            
            if (searchInput.value.trim()) {
                countElement.textContent = `${visibleCount} of ${totalProblems} problems`;
            } else {
                countElement.textContent = `${totalProblems} problems`;
            }
        }
    });
}

// Toggle section expanded/collapsed state
function toggleSection(e) {
    const button = e.currentTarget;
    const sectionName = button.getAttribute('data-section');
    const sectionContent = document.getElementById(sectionName + 'Problems');
    
    const isExpanded = expandedSections.has(sectionName);
    
    if (isExpanded) {
        expandedSections.delete(sectionName);
        sectionContent.classList.remove('expanded');
        button.setAttribute('aria-expanded', 'false');
    } else {
        expandedSections.add(sectionName);
        sectionContent.classList.add('expanded');
        button.setAttribute('aria-expanded', 'true');
    }
}

// Expand all sections (used during search)
function expandAllSections() {
    const sections = ['easy', 'medium', 'hard'];
    
    sections.forEach(section => {
        const sectionContent = document.getElementById(section + 'Problems');
        const sectionButton = document.querySelector(`[data-section="${section}"]`);
        
        expandedSections.add(section);
        sectionContent.classList.add('expanded');
        if (sectionButton) {
            sectionButton.setAttribute('aria-expanded', 'true');
        }
    });
}

// Utility function to debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced search with debouncing
const debouncedSearch = debounce(handleSearch, 300);
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', debouncedSearch);