// Type for individual leaderboard entry
interface LeaderboardEntry {
    _id: string;
    email: string;
    referralCode: string;
    referralsCount: number;
  }
  
  // Type for referral progress
  interface ReferralProgress {
    goal: number;
    past: string;
    referralsCount: number;
    remaining: number;
  }
  
  // Type for user details
  interface User {
    createdAt: string;
    email: string;
    referralCode: string;
    taskCompleted: boolean;
    updatedAt: string;
    __v: number;
    _id: string;
  }
  
  // Type for the entire response structure
  export interface WaitlistData {
    leaderboard: LeaderboardEntry[];
    position: number;
    referralCode: string;
    referralProgress: ReferralProgress;
    user: User;
  }
  