'use client';

import React from 'react';
import { 
  Star, 
  MessageSquare, 
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const reviewsData = [
  {
    id: 1,
    customer: "Amina Hassan",
    avatar: "AH",
    avatarColor: "bg-[#D946EF]",
    service: "Hair Braiding",
    rating: 5,
    comment: "Absolutely amazing experience! Sarah did an incredible job with my braids. Will definitely be coming back.",
    date: "24 Jan 2025",
    reply: null
  },
  {
    id: 2,
    customer: "Fatima Al-Rashid",
    avatar: "FA",
    avatarColor: "bg-[#0EA5E9]",
    service: "Facial Treatment",
    rating: 4,
    comment: "Great service overall. The facial was very relaxing. Slight wait time at the start but nothing major.",
    date: "22 Jan 2025",
    reply: "Thank you for your kind words, Fatima! We apologize for the small wait and will do better next time."
  },
  {
    id: 3,
    customer: "Zara Okonkwo",
    avatar: "ZO",
    avatarColor: "bg-[#8B5CF6]",
    service: "Manicure & Pedicure",
    rating: 5,
    comment: "Lisa is a gem! My nails have never looked better. The salon is spotless and the atmosphere is so calming.",
    date: "20 Jan 2025",
    reply: null
  },
  {
    id: 4,
    customer: "Layla Mensah",
    avatar: "LM",
    avatarColor: "bg-[#06B6D4]",
    service: "Full Body Massage",
    rating: 3,
    comment: "The service was okay but I felt a bit rushed. Expected more thoroughness for the price point.",
    date: "18 Jan 2025",
    reply: null
  },
  {
    id: 5,
    customer: "Nadia Kofi",
    avatar: "NK",
    avatarColor: "bg-[#6366F1]",
    service: "Facial Treatment",
    rating: 5,
    comment: "Best salon in Dubai, hands down! Emma is a true professional. My skin has never felt this good.",
    date: "15 Jan 2025",
    reply: "Thank you so much, Nadia! Emma will be thrilled to hear this. See you next time! 🌸"
  }
];

const ratingBreakdown = [
  { stars: 5, count: 3, percentage: 60 },
  { stars: 4, count: 1, percentage: 20 },
  { stars: 3, count: 1, percentage: 20 },
  { stars: 2, count: 1, percentage: 20 },
  { stars: 1, count: 0, percentage: 0 },
];

const RatingSidebar = () => (
  <div className="bg-white rounded-[32px] p-10 border border-slate-50 shadow-sm space-y-10">
    <div className="text-center space-y-3">
      <h2 className="text-[72px] font-bold text-foreground leading-none">4.0</h2>
      <div className="flex items-center justify-center gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className={cn("w-6 h-6", i <= 4 ? "text-[#F59E0B] fill-[#F59E0B]" : "text-slate-200 fill-slate-200")} />
        ))}
      </div>
      <p className="text-base font-medium text-muted-foreground">6 reviews</p>
    </div>

    <div className="space-y-4">
      {ratingBreakdown.map((row) => (
        <div key={row.stars} className="flex items-center gap-5 group">
          <div className="flex items-center gap-2 min-w-[24px]">
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{row.stars}</span>
            <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
          </div>
          <div className="h-2 flex-1 bg-slate-50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#F59E0B] rounded-full transition-all duration-500" 
              style={{ width: `${row.percentage}%` }} 
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground/70 min-w-[12px]">{row.count}</span>
        </div>
      ))}
    </div>
  </div>
);

const ReviewCard = ({ review }: { review: typeof reviewsData[0] }) => (
  <div className="bg-white rounded-[28px] p-7 border border-slate-50 shadow-sm space-y-5 hover:border-slate-200 transition-all">
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-[52px] w-[52px] rounded-full shrink-0">
          <AvatarFallback className={cn(review.avatarColor, "text-white text-base font-bold")}>
            {review.avatar}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-0.5">
          <h3 className="text-base font-semibold text-foreground">{review.customer}</h3>
          <p className="text-xs font-medium text-muted-foreground">
            {review.service} · {review.date}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className={cn("w-4 h-4", i <= review.rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-slate-200 fill-slate-200")} />
        ))}
      </div>
    </div>

    <p className="text-[15px] font-medium text-foreground/80 leading-relaxed">
      {review.comment}
    </p>

    {review.reply ? (
      <div className="bg-primary/10 rounded-[24px] p-6 space-y-2 border border-primary/10">
        <h4 className="text-xs font-bold text-primary tracking-wide">Your Reply</h4>
        <p className="text-[13px] font-medium text-primary/80 leading-relaxed">
          {review.reply}
        </p>
      </div>
    ) : (
      <button className="flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-primary/80 transition-colors pt-2 active:scale-95 origin-left">
        <MessageSquare className="w-4 h-4" />
        Reply to Review
      </button>
    )}
  </div>
);

export default function ReviewsPage() {
  return (
    <div className="p-6 lg:p-10 space-y-10 bg-[#F8FAFC]/50 min-h-screen">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-[32px] font-bold text-foreground tracking-tight">Review Management</h1>
        <p className="text-muted-foreground text-base font-medium">
          6 reviews · 4.0 average rating
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
        {/* Left Sidebar */}
        <div className="xl:col-span-4 sticky top-24">
          <RatingSidebar />
        </div>

        {/* Review List */}
        <div className="xl:col-span-8 space-y-6">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
