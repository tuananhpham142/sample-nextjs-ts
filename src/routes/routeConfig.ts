export const paths = {
    Home: '/',
    //Auth -
    Signin: '/auth/signin',
    Register: '/auth/signup',
    ConfirmAccount: '/auth/account-confirm',
    ForgotPassword: '/auth/forgot-password',
    ResetPassword: '/auth/reset-password',
    //User profile - domain/<user>...
    UserProfile: `/users/[slugname]`,
    UserSettings: `/users/[slugname]/settings`,
    UserReviews: `/users/[slugname]/reviews`,
    UserPlaces: `/users/[slugname]/places`,
    UserSaved: `/users/[slugname]/saved`,
    UserPhotos: `/users/[slugname]/photos`,
    UserVideos: `/users/[slugname]/videos`,
    UserPlanTrip: `/users/[slugname]/[plantrip]`,
    UserFriends: `/users/[slugname]/friends`,
    UserFollowers: `/users/[slugname]/followers`,
    UserFollowing: `/users/[slugname]/following`,
    UserMessages: `/users/[slugname]/messages`,
    UserPosts: `/users/[slugname]/posts`,
    UserPostsDetail: `/users/[slugname]/posts/[postSlug]`,
    UserPlantrips: `/users/[slugname]/plantrips`,
    UserPlantripsDetail: `/users/[slugname]/plantrips/[planTripSlug]`,
    //Dynamic page - domain/<tiêu đề>
    DynamicPage: `/[slugname]`,
    //Places - domain/dia_diem/<tên địa điểm>
    Places: `/places`,
    PlaceHomepage: `/places/[name]`,
    PlacePhotos: `/places/[name]/photos`,
    PlaceVideos: `/places/[name]/videos`,
    PlaceNearby: `/places/[name]/nearby`,
    //Plantrip - domain/plantrip/<tiêu đề>
    PlanTripHomepage: `/plantrips`,
    PlanTripDetail: `/plantrips/[slug]`,
    //hashtag - domain/hashtag/<hashtag>
    HashtagHomepage: `/hashtags`,
    HashtagDetail: `/hashtags/[hashtag]`,
    //search - - domain/tim-kiem/...
    SearchHomepage: `/search`,
    SearchPhotos: `/search/photos`,
    SearchVideos: `/search/videos`,
    SearchPosts: `/search/posts`,
    SearchPeople: `/search/people`,
    SearchAll: `/search/all`,
    SearchHashtag: `/search/hashtag`,
};
