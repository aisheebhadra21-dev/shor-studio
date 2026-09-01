"use client";

import { useEffect, useState } from "react";

type Track = {
  id: string;
  title: string;
  artist: string;
};

/* =========================
   SHOR RADIO
   ========================= */

const SHOR_TRACKS: Track[] = [
  {
    id: "3jxNbVmugKWFFc3YAVl0sD",
    title: "Aabaad Barbaad",
    artist: "Pritam · Arijit Singh",
  },
  {
    id: "3vCzLB6kS2lGcIpm1OOUsy",
    title: "Ishq Hai",
    artist: "Anurag Saikia · Romy · Varun Jain",
  },
  {
    id: "2sT0eosuhBEkw8dz6qFxUo",
    title: "Aise Kyun",
    artist: "Anurag Saikia · Raghav Chaitanya · Nikhita Gandhi",
  },
  {
    id: "6gUWYLF4r3wUmdOQ8eymh7",
    title: "Dil Se Dil",
    artist: "Vishal Chandrashekhar · Shashwat Singh",
  },
  {
    id: "3g5JKHCtMyjEXJY2ZotLoA",
    title: "Sahiba",
    artist: "Shashwat Sachdev · Romy · Pawni Pandey",
  },
  {
    id: "4vHRQnzGcKEtqsLH70tAms",
    title: "Raanjhan",
    artist: "Sachet-Parampara · Parampara Tandon",
  },
  {
    id: "7G5wpuR61ABrT7R1snos7C",
    title: "Kalank – Title Track",
    artist: "Pritam · Arijit Singh",
  },
  {
    id: "2mVqfKbKGmxVXlVswhlI5T",
    title: "Chaap Tilak",
    artist: "Abida Parveen · Rahat Fateh Ali Khan",
  },
  {
    id: "4gOjXXEwYz2WS9s6ixgUtd",
    title: "Tani Sun La",
    artist: "Vaibhav Bundhoo · Traditional",
  },
  {
    id: "6hVq4MGBhPIniEmpGbJIWR",
    title: "Hardum Humdum",
    artist: "Pritam · Arijit Singh",
  },
  {
    id: "2QophXhN2Ls2URfoPmiviC",
    title: "Kho Gaye",
    artist: "Taaruk Raina · Mismatched Cast",
  },
  {
    id: "4SrVkrpAyykhbVnATbfvPV",
    title: "Dhadak – Title Track",
    artist: "Ajay Gogavale · Shreya Ghoshal",
  },
  {
    id: "2tEV3uJ6RlBiZPWaS7aJmb",
    title: "Pehli Baar",
    artist: "Ajay Gogavale",
  },
  {
    id: "743ja6r6aTqAL00ynZGG2q",
    title: "Ei Srabon",
    artist: "Rupam Islam · Anupam Roy",
  },
  {
    id: "77FL46gBFDDbKHJpQwc1b3",
    title: "Jawl Phoring",
    artist: "Silajit · Anupam Roy",
  },
  {
    id: "78KKYDENYsw6jYfuEZsqJl",
    title: "Saathiya",
    artist: "A.R. Rahman · Sonu Nigam · Gulzar",
  },
  {
    id: "3Bq7CnWgfvplEzGSVXUvOe",
    title: "Ay Hairathe",
    artist: "A.R. Rahman · Hariharan · Alka Yagnik",
  },
];

/* =========================
   NAACHO SAALO
   ========================= */

const NAACHO_TRACKS: Track[] = [
  {
    id: "2IVpapKaryZc8YbCkwF0sV",
    title: "Tattad Tattad",
    artist: "Sanjay Leela Bhansali · Aditya Narayan",
  },
  {
    id: "0YKEBiwNh4VGsuf99aNfLa",
    title: "Anarkali Disco Chali",
    artist: "Mamta Sharma · Sukhwinder Singh",
  },
  {
    id: "4Q6VtqpbcW8YMTfAefpWv3",
    title: "Appadipodu",
    artist: "Vidyasagar · KK · Anuradha Sriram",
  },
  {
    id: "2bL5T9oWnvc8iSxV1sAcAA",
    title: "One Two Three Four",
    artist: "Vishal-Shekhar · Vishal Dadlani · Hamsika Iyer",
  },
  {
    id: "0FOniWOTfxWVJHncU9Dvst",
    title: "Dreamum Wakeupum",
    artist: "Sowmya Raoh · Amit Trivedi",
  },
  {
    id: "4jSb1vp0Mh3PfaELzGhGU9",
    title: "Tinku Jiya",
    artist: "Mamta Sharma · Javed Ali",
  },
  {
    id: "5abF4FI366vQdn3ALwBmLS",
    title: "Hoth Rasiley",
    artist: "Anand Raj Anand · Shankar Mahadevan · Shreya Ghoshal",
  },
  {
    id: "0hL7tvMKBLW30sige6ctu7",
    title: "Chokra Jawaan",
    artist: "Amit Trivedi · Vishal Dadlani · Sunidhi Chauhan",
  },
  {
    id: "4NtaQSiRgkQ2Af8GSW0B0t",
    title: "Billo Rani",
    artist: "Pritam · Richa Sharma",
  },
  {
    id: "0nkF0CojMczlSHMddiib6n",
    title: "Dil Dance Maare",
    artist: "Vishal-Shekhar · Sukhwinder Singh · Udit Narayan",
  },
  {
    id: "67VHAZo2eUry9rcCeTGlhs",
    title: "Dil Mein Baji Guitar",
    artist: "Mika Singh · Pritam",
  },
  {
    id: "4OjfYKfJ0F38w0Dn6goVkU",
    title: "Jalebi Bai",
    artist: "Ritu Pathak · Gorisha Gogoi · Anand Raj Anand",
  },
  {
    id: "1XfsjpesA33pLLCaWxAX1Q",
    title: "Dhanno",
    artist: "Mika Singh · Sunidhi Chauhan",
  },
  {
    id: "72HdutlIHBZJ7WT1xVAAZT",
    title: "Kajra Re",
    artist: "Shankar-Ehsaan-Loy · Alisha Chinai · Shankar Mahadevan",
  },
  {
    id: "6VbmeIWTbNHM5uqoW7GTE4",
    title: "Sheila Ki Jawani",
    artist: "Vishal-Shekhar · Sunidhi Chauhan · Vishal Dadlani",
  },
  {
    id: "5YY8EsBdUYAg1NJQIvgCEj",
    title: "Ghagra",
    artist: "Pritam · Rekha Bhardwaj · Vishal Dadlani",
  },
  {
    id: "2YMM8URWpyGIrT0sKBLtD3",
    title: "Beedi",
    artist: "Vishal Bhardwaj · Sukhwinder Singh · Sunidhi Chauhan",
  },
  {
    id: "4GVNaX8tB7X14lv2hnUm3e",
    title: "Tune Maari Entriyaan",
    artist: "Sohail Sen · Vishal Dadlani · KK · Neeti Mohan",
  },
  {
    id: "6G8LGTxKurKEzGW3DV6HEH",
    title: "Chingam Chabake",
    artist: "Shankar-Ehsaan-Loy · Shankar Mahadevan",
  },
  {
    id: "7hNYvX0qAKrxtVr1jGDmvR",
    title: "Gallan Goodiyaan",
    artist: "Shankar-Ehsaan-Loy · Yashita Sharma · Farhan Akhtar",
  },
  {
    id: "3CXHPRFNic9WOsazT4huOJ",
    title: "Aa Re Pritam Pyaare",
    artist: "Sajid-Wajid · Mamta Sharma · Sarosh Sami",
  },
  {
    id: "1ZmaJl1kHdTxbzji59LD2c",
    title: "Dhating Naach",
    artist: "Pritam · Neha Kakkar · Nakash Aziz",
  },
  {
    id: "0hY9eA74QrMCJuWEx7fo9y",
    title: "Kurchi Madathapetti",
    artist: "Thaman S · Sri Krishna · Sahithi Chaganti",
  },
  {
    id: "5MHqNesgY5VngoCITqsZGh",
    title: "Dholi Taro",
    artist: "Various Artists",
  },
  {
    id: "0kQpLj2M2ngqDnGuFeHvg4",
    title: "Malhari",
    artist: "Sanjay Leela Bhansali · Vishal Dadlani",
  },
  {
    id: "7iW9pTNgp2HtlRJinoYuiA",
    title: "Emosanal Attyachaar",
    artist: "Band Master Rangeela · Rasila",
  },
];

const ICONIC_TRACKS: Track[] = [
  {
    id: "7gYllw9VHAzfr825KXs3bE",
    title: "Shuddh Desi Romance",
    artist: "Various Artists",
  },
  {
    id: "1RqmsIhNAbTDliJwxqFR10",
    title: "Halla Re",
    artist: "Various Artists",
  },
  {
    id: "6z3p3Gm5FOH1n22ummzEh7",
    title: "Darling",
    artist: "Various Artists",
  },
  {
    id: "7xxxQG1BupSnOBo4qId9kl",
    title: "Drama Queen",
    artist: "Various Artists",
  },
  {
    id: "2N9938r4qmE9yvxLRS7mIq",
    title: "Fugly",
    artist: "Various Artists",
  },
  {
    id: "6iC7uWRaU8uuklZ6z7yC1c",
    title: "Aa Ante Amalapuram",
    artist: "Various Artists",
  },
  {
    id: "2qiKQzwbzOH5pMxhztkbLN",
    title: "Laila",
    artist: "Various Artists",
  },
  {
    id: "0V6i9XZ7NOfXQAygSaswnM",
    title: "Le Le Mazaa Le",
    artist: "Various Artists",
  },
  {
    id: "22HJ4YE3pSe2a5udrDRIWz",
    title: "Move Your Body",
    artist: "Various Artists",
  },
  {
    id: "2p54FBeWYWX56nPCaR67hP",
    title: "Shake It Like Shammi",
    artist: "Vishal-Shekhar · Benny Dayal",
  },
  {
    id: "1y8Ck6jFOyxNC59SrQJIn6",
    title: "Jhalla Wallah",
    artist: "Various Artists",
  },
  {
    id: "2Z75W3sVrq9hVGJOskxcAw",
    title: "Pallo Latke",
    artist: "Zain-Sam · Fazilpuria · Yasser Desai · Jyotica Tangri · Kumaar",
  },
  {
    id: "0kQpLj2M2ngqDnGuFeHvg4",
    title: "Malhari",
    artist: "Sanjay Leela Bhansali · Vishal Dadlani",
  },
  {
    id: "0bHnzW0bxdghfzdX0BhDht",
    title: "Matru Ki Bijlee Ka Mandola",
    artist: "Various Artists",
  },
  {
    id: "5se64jXNVjK96bNOBxBkX7",
    title: "Wajle Ki Bara",
    artist: "Various Artists",
  },
  {
    id: "2nNaw1QUcqiEX6pBFxcpp3",
    title: "Marjaani",
    artist: "Various Artists",
  },
  {
    id: "4wgR8jjv934KJhvGq8EpYR",
    title: "Ban Than Chali",
    artist: "Various Artists",
  },
  {
    id: "77J8eFNSZYInOg2Ap12Mpc",
    title: "Raat Ke Dhai Baje",
    artist: "Various Artists",
  },
  {
    id: "1OL60YxJPfB9Oph420fd57",
    title: "Engine Ki Seeti",
    artist: "Various Artists",
  },
  {
    id: "26VnEKps0l0JWIrdx2E62G",
    title: "Saalame",
    artist: "Various Artists",
  },
  {
    id: "1kptwDq9gbWOdmTm6C2bCm",
    title: "Jadoo Ki Jhappi",
    artist: "Various Artists",
  },
  {
    id: "5xJD9iDQV4yDbagNGmJOKN",
    title: "Main Aai Hoon U.P. Bihar Lootne",
    artist: "Various Artists",
  },
  {
    id: "1SdFBc40uBU5Pqylo05VIC",
    title: "Rang De Basanti",
    artist: "Various Artists",
  },
  {
    id: "3nINntbMrOno977x5wRMMj",
    title: "Vacancy",
    artist: "Various Artists",
  },
  {
    id: "6RZwj2PZDqM6g7gmO6bOxw",
    title: "Do Dhaari Talwaar",
    artist: "Various Artists",
  },
  {
    id: "77CwFcxkvpGOc86zVEATWO",
    title: "Baawre",
    artist: "Various Artists",
  },
  {
    id: "44OZwf1pS0nnoPJEz2pqAX",
    title: "Madhubala",
    artist: "Various Artists",
  },
  {
    id: "66uABCPRmFwGrvlVONVLFR",
    title: "Second Hand Jawaani",
    artist: "Various Artists",
  },
  {
    id: "4AU7grlHjN1IuDsmU0fmGG",
    title: "Ranjana Ami Ar Ashbona",
    artist: "Various Artists",
  },
  {
    id: "6bRMrsjdHJ6W7zDEep3JlE",
    title: "Small Town Girl",
    artist: "Various Artists",
  },
  {
    id: "0hL7tvMKBLW30sige6ctu7",
    title: "Chokra Jawaan",
    artist: "Amit Trivedi · Vishal Dadlani · Sunidhi Chauhan",
  },
  {
    id: "4gC6xOiJLHTpIARRdmYMaQ",
    title: "Ra Ra Reddy",
    artist: "Various Artists",
  },
  {
    id: "4DKIzK0M2OqWhoLv1J7RpX",
    title: "Faltu",
    artist: "Various Artists",
  },
  {
    id: "22X1WF93XonsAWnrKrRYSo",
    title: "Geet Gobindo",
    artist: "Various Artists",
  },
  {
    id: "3ICmTjj3HKXgFIKaXlj78N",
    title: "Badmaash Company – Title Track",
    artist: "Various Artists",
  },
];

/* =========================
   ISHQ VISHQ
   ========================= */

const SOFT_TRACKS: Track[] = [
  {
    id: "53JA46jA1QroK2kQlyFlkM",
    title: "In Lamhon Ke Daaman Mein",
    artist: "Various Artists",
  },
  {
    id: "1HIrOjfpGrONXgylYv9UTk",
    title: "O Rey Chhori",
    artist: "Various Artists",
  },
  {
    id: "2C6l8EGcbfcLXu0mWfAadB",
    title: "Chup Chup Ke",
    artist: "Various Artists",
  },
  {
    id: "4rpefSTp39DtcMJMuZgsGq",
    title: "Haila Haila",
    artist: "Various Artists",
  },
  {
    id: "6K0Ea7pq2trf6SwsfEKkOp",
    title: "Aye Udi Udi",
    artist: "Various Artists",
  },
  {
    id: "4uLG79ROWYEXx1kJvDVbWI",
    title: "Tere Rang",
    artist: "Various Artists",
  },
  {
    id: "24yd8olUggbkvROgA2irRx",
    title: "Laal Ishq",
    artist: "Arijit Singh",
  },
  {
    id: "3igjvls6LMb3TncpfSxVda",
    title: "Jab Saiyaan",
    artist: "Various Artists",
  },
  {
    id: "2tqIKAq7jGWdt7u6Gb8tRF",
    title: "Jogi",
    artist: "Various Artists",
  },
  {
    id: "2RktkeigsgvhuRNQl0ioGS",
    title: "Bhaage Re Mann",
    artist: "Various Artists",
  },
  {
    id: "6AKWp18rxG3DZTxp6A2E2T",
    title: "Aao Naa",
    artist: "Various Artists",
  },
  {
    id: "3Bq7CnWgfvplEzGSVXUvOe",
    title: "Ay Hairathe",
    artist: "A.R. Rahman · Hariharan · Alka Yagnik",
  },
  {
    id: "4dPeCbg2Op44s9kwyMS3ZT",
    title: "Sadka",
    artist: "Various Artists",
  },
  {
    id: "5DyYcwMw0f6z3FefXNLOHv",
    title: "Ishq Hua",
    artist: "Various Artists",
  },
  {
    id: "3vjkllvtOIKpVvXSWsu1ta",
    title: "Tu Hai",
    artist: "Various Artists",
  },
  {
    id: "6512hyAQxOng8v4R71IV47",
    title: "Hairat",
    artist: "Various Artists",
  },
  {
    id: "2UKK9UEbKlykbmLVP1zWIQ",
    title: "Haule Haule",
    artist: "Various Artists",
  },
  {
    id: "56C574oTBq65dbs4PE284S",
    title: "Jiya Dhadak Dhadak",
    artist: "Rahat Fateh Ali Khan",
  },
  {
    id: "5WncH5iZ5GFlnXm7jKEXVP",
    title: "Labon Ko",
    artist: "Various Artists",
  },
  {
    id: "6u1DxxgF1evEXDD4U95L6V",
    title: "Toota Jo Kabhi Tara",
    artist: "Various Artists",
  },
  {
    id: "0qUkYhvVzNjqjZVmpXRUwv",
    title: "Je Kawta Din",
    artist: "Various Artists",
  },
  {
    id: "70ZpEKSZ8dwZYhzJR6Ckgj",
    title: "Chawl Rastaye",
    artist: "Various Artists",
  },
  {
    id: "0Qa9pTZLUC95wJCHGYMIg4",
    title: "Sajdaa",
    artist: "Various Artists",
  },
  {
    id: "3Kl8p2PxVf8eAayLwTxOIm",
    title: "Dil Ibaadat",
    artist: "Various Artists",
  },
  {
    id: "1lGomk0tsbt7orWGK8XoqA",
    title: "Bairi Piya",
    artist: "Various Artists",
  },
  {
    id: "1yWRvboe226hrrOppBXw4v",
    title: "Mohe Rang Do",
    artist: "Various Artists",
  },
  {
    id: "5JCDVLwteSXuwVqjCa7SwH",
    title: "O Rangrez",
    artist: "Various Artists",
  },
  {
    id: "1udm3l9b7ihq00RtHAFkBx",
    title: "Piya Tora Kaisa Abhiman",
    artist: "Various Artists",
  },
  {
    id: "2saVO8vB4BX8kCHaZCuIIF",
    title: "Kabhi Neem Neem",
    artist: "Various Artists",
  },
  {
    id: "28syjZyasVJ4J4oxBDOF1b",
    title: "Bumbro",
    artist: "Various Artists",
  },
  {
    id: "65wdzLeZLnsJf0Z1CQrAKQ",
    title: "Maafi",
    artist: "Various Artists",
  },
  {
    id: "1OKzFUAlwKKXImxgNDacbf",
    title: "Rukhi Sukhi Roti",
    artist: "Various Artists",
  },
  {
    id: "7xvenkAHls5xTNUKDkD8Jm",
    title: "In Aankhon Mein Tum",
    artist: "Various Artists",
  },
];

/* =========================
   DEKHO, MAGAR PYAAR SE
   ========================= */

const ROMANTIC_TRACKS: Track[] = [
  {
    id: "4CugsCV0mb9QHnffgfnpQO",
    title: "Daawat-e-Ishq",
    artist: "Various Artists",
  },
  {
    id: "6jWLxg64GmlOJ6EKsCDZ1I",
    title: "Ishqaun Dhishqyaun",
    artist: "Various Artists",
  },
  {
    id: "5rV11RUN5odNzPaVNkucjd",
    title: "Dhoka Dhoka",
    artist: "Various Artists",
  },
  {
    id: "4kUWdUJZnxWMxY31AzorKa",
    title: "Dilbara",
    artist: "Various Artists",
  },
  {
    id: "0fRQGNuIp5cdr9TBShw1bN",
    title: "Gun Gun Guna",
    artist: "Various Artists",
  },
  {
    id: "6RJgakz1oGelOrCZ6J1PNd",
    title: "May Se Meena",
    artist: "Various Artists",
  },
  {
    id: "5eIYbtHTZomvKPucc1oJoo",
    title: "Tere Mere Beech Mein",
    artist: "Various Artists",
  },
  {
    id: "6G8LGTxKurKEzGW3DV6HEH",
    title: "Chingam Chabake",
    artist: "Various Artists",
  },
  {
    id: "34wsgkPMRk3xIfHdwtezbf",
    title: "Tainu Leke",
    artist: "Various Artists",
  },
  {
    id: "5yYgGkyYJmmSwRp3caFplJ",
    title: "Radha",
    artist: "Various Artists",
  },
  {
    id: "2Ggpu9s4UP2fO7bjgBMiss",
    title: "Dhinka Chika",
    artist: "Various Artists",
  },
  {
    id: "7F2wxrc0bHjCQbBvESQBXY",
    title: "Raat Ke Dhai Baje",
    artist: "Various Artists",
  },
  {
    id: "5pQODzb8j3xMQ1qvrQXJvo",
    title: "Laung Da Lashkara",
    artist: "Various Artists",
  },
  {
    id: "0hgTkEDY9oIG5DPKN39KHP",
    title: "Ude Dil Befikre",
    artist: "Various Artists",
  },
  {
    id: "3nINntbMrOno977x5wRMMj",
    title: "Vacancy",
    artist: "Various Artists",
  },
  {
    id: "6F4GPNjqX3msncEHOR18Y3",
    title: "Ishq Kameena",
    artist: "Various Artists",
  },
  {
    id: "1VGt7ZmY4iPfrabXjIMHo4",
    title: "Aashiqui Mein Teri",
    artist: "Various Artists",
  },
  {
    id: "0JX7Es2j556FwtR6YqMKzP",
    title: "Slow Motion Angreza",
    artist: "Various Artists",
  },
  {
    id: "6BJxQbKyQSdBOBIuW5TTmi",
    title: "Shikdum",
    artist: "Various Artists",
  },
  {
    id: "0q84FggW57NXGtLHoetS0Y",
    title: "Pardesiya",
    artist: "Various Artists",
  },
  {
    id: "1gwO79MdYdumgIjxq8eCxB",
    title: "Bahara",
    artist: "Various Artists",
  },
  {
    id: "0dfDtMJigXYVWoqNovKPA3",
    title: "Tauba Tauba",
    artist: "Various Artists",
  },
  {
    id: "6TuPGbfbcWxITQnyMy04rU",
    title: "Jogi Mahi",
    artist: "Various Artists",
  },
  {
    id: "2aX5JlPdYrZZyGlqyjfwFm",
    title: "Gazab",
    artist: "Various Artists",
  },
  {
    id: "29wRh7aUncjPkqWVkZStH2",
    title: "Main Badhiya Tu Bhi Badhiya",
    artist: "Various Artists",
  },
  {
    id: "1mQUEvGR7Sbt2OCz2gFrdx",
    title: "Aayi Nai",
    artist: "Various Artists",
  },
  {
    id: "44OZwf1pS0nnoPJEz2pqAX",
    title: "Madhubala",
    artist: "Various Artists",
  },
  {
    id: "6R4j3yJrYvyfk440C0enUW",
    title: "Chor Bazaari",
    artist: "Various Artists",
  },
  {
    id: "0F04XRwhkYDkx2HVHtaqHt",
    title: "Papa Jag Jayega",
    artist: "Various Artists",
  },
  {
    id: "3qxLYSU1s5pqk8rz6dJNVi",
    title: "Faraatta",
    artist: "Various Artists",
  },
  {
    id: "28syjZyasVJ4J4oxBDOF1b",
    title: "Bumbro",
    artist: "Various Artists",
  },
  {
    id: "29TxNjggevDy8ovcglZvve",
    title: "YPD Title Track (RDB Version) Part 1",
    artist: "Various Artists",
  },
  {
    id: "0iROORKlmZN13wJNTOyPb4",
    title: "Shyamal Sanware",
    artist: "Various Artists",
  },
  {
    id: "3vCzLB6kS2lGcIpm1OOUsy",
    title: "Ishq Hai",
    artist: "Various Artists",
  },
  {
    id: "4Tt6aPhCnVPA9tFrK7E0Mx",
    title: "Mehbooba Mehbooba",
    artist: "Various Artists",
  },
];

/* =========================
   PEAK सुन्दरता
   ========================= */

const BEAUTY_TRACKS: Track[] = [
  {
    id: "4GrzhbZQQc9SrU4Vo6J3WY",
    title: "Yoon Shabnami",
    artist: "Various Artists",
  },
  {
    id: "2zp2rgsKSqwcuN4OWH5eq8",
    title: "Mor Bani Thanghat Kare",
    artist: "Various Artists",
  },
  {
    id: "0KEIFUBScxUSEWia9Bf92L",
    title: "Era Sukher Laagi",
    artist: "Various Artists",
  },
  {
    id: "1O5mTSQa0sCce9ghhDqIZl",
    title: "Jashn-E-Bahaaraa",
    artist: "Various Artists",
  },
  {
    id: "6sYox3GQGJg6zcQVDU9XqD",
    title: "Kasto Mazza",
    artist: "Various Artists",
  },
  {
    id: "67wuqsKi5LZOBAtTLzeK8g",
    title: "Mere Khayalon Ki Malika",
    artist: "Various Artists",
  },
  {
    id: "4YwGnKgtq7V0EI1hYNOirm",
    title: "O Bekhabar",
    artist: "Various Artists",
  },
  {
    id: "29YePgOxuPLfU7uZKxKf6w",
    title: "Sawaar Loon",
    artist: "Various Artists",
  },
  {
    id: "2K5E2U5SbVuWov1Dxe4Kei",
    title: "Pherari Mon",
    artist: "Various Artists",
  },
  {
    id: "722iTdG4jgcueIWZjpwVr8",
    title: "Jao Pakhi",
    artist: "Various Artists",
  },
  {
    id: "4qRcjFkFqSpLBzcbLDt7HL",
    title: "Ambarsariya",
    artist: "Various Artists",
  },
  {
    id: "4wgR8jjv934KJhvGq8EpYR",
    title: "Banthan Ke",
    artist: "Various Artists",
  },
  {
    id: "7uWt6BU9XnA6izKKjHtMwG",
    title: "Apsara Aali",
    artist: "Various Artists",
  },
  {
    id: "6r90OdoRUIcCltarmYKnMe",
    title: "Rajvaadi Odhni",
    artist: "Various Artists",
  },
  {
    id: "32DWojMZeZebVrfBkhAkKy",
    title: "Barso Re",
    artist: "Various Artists",
  },
  {
    id: "7MAQPwX1d9t6ECrlXJSbbN",
    title: "Sholon Si",
    artist: "Various Artists",
  },
  {
    id: "3B5pWnmR739mZFh4eVdFla",
    title: "Udi",
    artist: "Various Artists",
  },
  {
    id: "5JlZLXvZBEFD9u8OoJq6Yh",
    title: "Girls Like To Swing",
    artist: "Various Artists",
  },
  {
    id: "2FXeR9nXs0QkURYWASjYn4",
    title: "Jhume Re Gori",
    artist: "Various Artists",
  },
  {
    id: "432leZkBmxF6si4ftPOOdn",
    title: "Ghar More Pardesiya",
    artist: "Various Artists",
  },
  {
    id: "1hiymB0nRJQQ661XjVRNzP",
    title: "Chhabeela",
    artist: "Various Artists",
  },
  {
    id: "28syjZyasVJ4J4oxBDOF1b",
    title: "Bumbro",
    artist: "Various Artists",
  },
  {
    id: "56YL27bYDkVZPWf3FazjLk",
    title: "Premika Ne Pyar Se",
    artist: "Various Artists",
  },
  {
    id: "1rEVydQSe04NJUqyyEyeEq",
    title: "Afghan Jalebi",
    artist: "Various Artists",
  },
  {
    id: "0hp4qW1zgKnBBiyyAdW3Sz",
    title: "Mayya",
    artist: "Various Artists",
  },
  {
    id: "6IQLxr1hzQVGLGMsuNWkUG",
    title: "Kaali Teri Gutt",
    artist: "Various Artists",
  },
  {
    id: "0k2modGW9JkPeVZSYQvWhz",
    title: "Husn Parcham",
    artist: "Various Artists",
  },
  {
    id: "3SDgHr72dJmr27JRvFUBZU",
    title: "Chandra",
    artist: "Various Artists",
  },
  {
    id: "5y0t6OQy8nVGoeIoNcQZ7g",
    title: "Kahin Aag Lage Lag Jaaye",
    artist: "Various Artists",
  },
  {
    id: "16R1Fq1nFxm9DJyzBzKjQk",
    title: "Aayat",
    artist: "Various Artists",
  },
  {
    id: "6xToiyKcZVBnq4bZSgHENr",
    title: "Tumhe Aaj Maine Jo Dekha",
    artist: "Various Artists",
  },
  {
    id: "6VOKUdxhjSwbjinKbguOmy",
    title: "Achha Lagta Hai",
    artist: "Various Artists",
  },
];

/* =========================
   कशिश - The Other Side
   ========================= */

const SENSUAL_TRACKS: Track[] = [
  {
    title: "Hai Rama",
    artist: "Hariharan, Swarnalatha",
    id: "0ZGicTeWpoIMpJax3NAuhn",
  },
  {
    title: "Kaisi Paheli Zindgani",
    artist: "Lata Mangeshkar",
    id: "4FSqyrDui4q3gzfldntzRD",
  },
  {
    title: "Khoya Khoya Chand - Acoustic",
    artist: "Subholina",
    id: "5A6BBkLjdYqkEcN0Pxiztm",
  },
  {
    title: "Gale Lag Ja",
    artist: "Javed Ali, Banjyotsna",
    id: "24vt7dNAWKNlf0y5ayTxsv",
  },
  {
    title: "Meri Jaan",
    artist: "Neeti Mohan",
    id: "4iEGv5Ne6HuCkFCjzxdWQK",
  },
  {
    title: "Namak",
    artist: "Javed Ali",
    id: "2byRygY5pkF4DzTLgd1r6G",
  },
  {
    title: "Tinka Tinka",
    artist: "Alisha Chinai",
    id: "7ybkDTSOcZu431OzpfcOJv",
  },
  {
    title: "O Saathi Re",
    artist: "Kishore Kumar",
    id: "2NGd5mBUq6MpvHVw2NTQa4",
  },
  {
    title: "Satrangi Re",
    artist: "Sonu Nigam, Kavita Krishnamurthy",
    id: "4OzSDQ3qMoSsz6aBcSaqJn",
  },
  {
    title: "Jadu Hai Nasha Hai",
    artist: "Shreya Ghoshal",
    id: "3ezYLk9ned8ITGIPMvfpew",
  },
  {
    title: "Zara Zara",
    artist: "Bombay Jayashri",
    id: "7wrYBASu0OoxoDErd4Edxd",
  },
  {
    title: "Be Intehaan",
    artist: "Atif Aslam, Sunidhi Chauhan",
    id: "077SVSWuifvbBbkPMPP5kw",
  },
  {
    title: "Behke Behke",
    artist: "Rahat Fateh Ali Khan, Shreya Ghoshal, Suzanne D'Mello",
    id: "3ijl9qo5is82rMyGoBfDO1",
  },
  {
    title: "Aa Zara",
    artist: "Sunidhi Chauhan",
    id: "42epVqODeb3JYwG8XwahPi",
  },
  {
    title: "Bheegi Saree",
    artist: "Shubham Kabra",
    id: "3z47FzesU0MyJKwpCGxOMp",
  },
  {
    title: "Manohari",
    artist: "Mohana Bhogaraju, Revanth",
    id: "3sKfLcMJPAptbFLnCB1Ytr",
  },
  {
    title: "Lahu Munh Lag Gaya",
    artist: "Shail Hada",
    id: "3eBdKorAlRB1GXQNXckdzY",
  },
  {
    title: "Kahin Aag Lage Lag Jawe",
    artist: "Asha Bhosle, Richa Sharma, Aditya Narayan",
    id: "5y0t6OQy8nVGoeIoNcQZ7g",
  },
  {
    title: "Ang Laga De",
    artist: "Shail Hada, Shreya Ghoshal",
    id: "3Pq8GuSIwiJKFZeaGCd3D2",
  },
  {
    title: "Aaj Phir",
    artist: "Arijit Singh, Samira Koppikar",
    id: "32SDVo3sSMGPL0IzRA6YTX",
  },
  {
    title: "Katra Katra",
    artist: "Ankit Tiwari, Prakriti Kakar",
    id: "0FMend2Dt9IUVDDtAPnLxO",
  },
  {
    title: "Woh Lamhe Woh Baatein",
    artist: "Atif Aslam",
    id: "5fwRhPXAvGgzUxW62ZCvEg",
  },
  {
    title: "Raat Ka Nasha",
    artist: "Chitra",
    id: "4gjFNGQ0BodNqiOAOAOMSW",
  },
  {
    title: "Pyaar Ki Ye Kahani",
    artist: "Shreya Ghoshal, Sonu Nigam",
    id: "7cRyUMxmpNGbWG9xpDoPn5",
  },
  {
    title: "Lazy Lamhe",
    artist: "Monali Thakur",
    id: "2IZQG2wYoVncO3hWCD4IyM",
  },
  {
    title: "Fifi",
    artist: "Mikey McCleary",
    id:  "7Hd216xGh0HkQFtklXMfUM",
  },
  {
    title: "I Don't Know What To Do",
    artist: "Shreya Ghoshal, Zubeen Garg",
    id: "6lahP9HhC6YflVhcwergHS",
  },
  {
    title: "Aaj Ki Raat",
    artist: "Alisha Chinai, Mahalakshmi Iyer, Sonu Nigam",
    id: "4bPF3oy4JsKK1UeMMn7Byf",
  },
  {
    title: "Mushkanein Jhoothi Hai",
    artist: "Swanand Kirkire",
    id: "6LX6modQsxnBouh7yZT6qx",
  },
  {
    title: "Ramta Jogi",
    artist: "Sukhwinder Singh, Alka Yagnik",
    id: "2fsPrE2NYiHOHPMuWbjvTj",
  },
];

/* =========================
   TYPES
   ========================= */

type PlayerProps = {
  room?: "radio" | "naacho" | "iconic" | "soft" | "romantic" | "beauty" | "sensual";
};

/* =========================
   KOLKATA CLOCK
   ========================= */

function KolkataClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      setTime(formatted);
    };

    update();

    const id = window.setInterval(update, 1000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="safe-top safe-left fixed z-40 translate-y-[5px] text-[10px] font-medium uppercase tracking-[0.14em] text-white/80">
      {time || "Kolkata"}
    </div>
  );
}

/* =========================
   HEADER
   ========================= */

function RadioHeader({
  currentIndex,
  title,
  tagline,
  playlistUrl,
  trackCount,
}: {
  currentIndex: number;
  title: string;
  tagline: string;
  playlistUrl: string;
  trackCount: number;
}) {
  return (
    <div className="mb-8 flex items-start justify-between gap-4 px-2">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,.9)]" />

          <span className="room-title text-[9px] font-semibold uppercase tracking-[0.28em] text-white/70">
            {title}
          </span>
        </div>

        <p className="room-tagline mt-1 text-[10px] italic tracking-[0.08em] text-white/70 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
          {tagline}
        </p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[7px] font-medium uppercase tracking-[0.18em] text-white/55 backdrop-blur-md transition hover:bg-white/10 hover:text-white sm:px-3.5 sm:py-2 sm:text-[8px]"
        >
          Open full playlist ↗
        </a>

        <span className="whitespace-nowrap text-[8px] uppercase tracking-[0.12em] text-white/40 sm:text-[9px] sm:tracking-[0.16em]">
          {String(currentIndex + 1).padStart(2, "0")} / {trackCount}
        </span>
      </div>
    </div>
  );
}

/* =========================
   PLAYER
   ========================= */

export function SpotifyPlayer({ room = "radio" }: PlayerProps) {
  const isNaacho = room === "naacho";
  const isIconic = room === "iconic";
  const isSoft = room === "soft";
  const isRomantic = room === "romantic";
  const isBeauty = room === "beauty";
  const isSensual = room === "sensual";
  const tracks = isSensual
  ? SENSUAL_TRACKS
  : isBeauty
    ? BEAUTY_TRACKS
    : isRomantic
      ? ROMANTIC_TRACKS
      : isSoft
        ? SOFT_TRACKS
        : isIconic
          ? ICONIC_TRACKS
          : isNaacho
            ? NAACHO_TRACKS
            : SHOR_TRACKS;

  const title = isSensual
  ? "कशिश - The Other Side"
  : isBeauty
    ? "PEAK सुन्दरता"
    : isRomantic
      ? "देखो, Magar Pyaar Se"
      : isSoft
        ? "इश्क़ - VISHQ"
        : isIconic
          ? "आइCONIC"
          : isNaacho
            ? "Naacho Saalo"
            : "Shor Radio";

  const tagline = isSensual
  ? "kuch der aur."
  : isBeauty
    ? "nazar sambhal ke."
    : isRomantic
      ? "mera dil phisal gayo re."
      : isSoft
        ? "shor nahi, sirf ishq."
        : isIconic
          ? "meri playlist, meri marzi."
          : isNaacho
            ? "baithna mana hai."
            : "songs for beautiful chaos.";

  const playlistUrl = isSensual
  ? "https://open.spotify.com/playlist/1MRXSAWIgUzNiqgzxusQY1"
  : isBeauty
    ? "https://open.spotify.com/playlist/79DcDNQRqFjK05sMOr0tBn"
    : isRomantic
      ? "https://open.spotify.com/playlist/23Rjmk8wz2T4oYQohEJcwZ"
      : isSoft
        ? "https://open.spotify.com/playlist/6uBhToZM2gLMmE2rk6MVFS"
        : isIconic
          ? "https://open.spotify.com/playlist/4kmf3m2TEK7Enn974vQtkI"
          : isNaacho
            ? "https://open.spotify.com/playlist/74Fd1VZoB3BiiBDbiVqNmK"
            : "https://open.spotify.com/playlist/2TXfUUl8lRIbF0S9qSoeOZ";

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTrack = tracks[currentIndex];

  const nextTrack = () => {
    setCurrentIndex((index) => (index + 1) % tracks.length);
  };

  const previousTrack = () => {
    setCurrentIndex(
      (index) => (index - 1 + tracks.length) % tracks.length
    );
  };

    return (
  <section className="safe-bottom fixed left-1/2 z-30 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 sm:w-[calc(100%-2rem)] sm:translate-y-0">
    <div className="translate-y-6">
      <RadioHeader
        currentIndex={currentIndex}
        title={title}
        tagline={tagline}
        playlistUrl={playlistUrl}
        trackCount={tracks.length}
      />
    </div>

    <div className="glass mx-auto w-full overflow-hidden rounded-[24px] p-1.5 pb-1 sm:rounded-[28px] sm:p-2">
      <div className="relative -mx-7 h-[142px] overflow-hidden rounded-[20px] border border-white/10 bg-transparent sm:mx-0 sm:h-[152px]">
  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

  <div className="absolute inset-0 overflow-hidden">
<div className="absolute left-1/2 top-0 w-full -translate-x-1/2 origin-top scale-[0.87] sm:static sm:w-full sm:translate-x-0 sm:scale-100">
    <iframe
      key={currentTrack.id}
      title={`${title} — ${currentTrack.title}`}
      src={`https://open.spotify.com/embed/track/${currentTrack.id}?utm_source=generator`}
      width="100%"
      height="152"
      frameBorder="0"
      loading="eager"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      className="block h-[152px] w-full rounded-[20px] sm:rounded-[24px]"
    />
  </div>
</div>
</div>

      <div className="flex items-center justify-between px-2 -translate-y-1 sm:px-2 sm:pt-2 sm:translate-y-0">
        <button
          onClick={previousTrack}
          type="button"
          style={{ fontSize: "13px" }}
          className="shrink-0 rounded-full px-1.5 py-1 text-[8px] uppercase tracking-[0.12em] text-white/50 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-[9px] sm:tracking-[0.16em]"
        >
          ← Previous
        </button>

        <div className="min-w-0 px-2 text-center sm:px-3">
          <p className="truncate text-[10px] font-medium uppercase tracking-[0.12em] text-white/70">
            {currentTrack.title}
          </p>

          <p className="mt-0.5 truncate text-[9px] text-white/35">
            {currentTrack.artist}
          </p>
        </div>

        <button
          onClick={nextTrack}
          type="button"
          style={{ fontSize: "13px" }}
          className="shrink-0 rounded-full px-2 py-1.5 text-[8px] uppercase tracking-[0.12em] text-white/50 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-[9px]"
        >
          Next →
        </button>
      </div>
    </div>
  </section>
);
}

export function Player({ room = "radio" }: PlayerProps) {
  return <SpotifyPlayer room={room} />;
}

export { KolkataClock };