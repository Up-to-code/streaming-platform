// This is a simplified version of a dictionary service
// In a real app, this would be more sophisticated with proper typing

const dictionaries: Record<string, any> = {
  en: {
    common: {
      playNow: "Play Now",
      moreInfo: "More Info",
      searchPlaceholder: "Search for movies, TV shows, and more...",
      filter: "Filter",
      genres: "Genres",
      openLink: "Open Link",
      saveChanges: "Save Changes",
    },
    nav: {
      home: "Home",
      movies: "Movies",
      tvShows: "TV Shows",
      anime: "Anime",
      myList: "My List",
      profile: "Profile",
      settings: "Settings",
      scan: "Scan",
    },
    auth: {
      signIn: "Sign In",
      signOut: "Sign Out",
      signUp: "Sign Up",
      email: "Email",
      password: "Password",
      name: "Name",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      signInDescription: "Enter your credentials to access your account",
      signUpDescription: "Create a new account to get started",
    },
    categories: {
      movie: "Movie",
      tvShow: "TV Show",
      anime: "Anime",
    },
    home: {
      featuredTitle: "Demon Slayer: Kimetsu no Yaiba",
      featuredDescription:
        "A boy raised by boars, who wears a boar's head, boards the Infinity Train on a new mission with the Flame Pillar along with another boy who reveals his true power when he sleeps.",
      featured: "Featured",
      trendingNow: "Trending Now",
      newReleases: "New Releases",
      popularAnime: "Popular Anime",
      popularTVShows: "Popular TV Shows",
    },
    notifications: {
      title: "Notifications",
      markRead: "Mark as read",
      markAllRead: "Mark all as read",
      markedAsRead: "Marked as read",
      markedAsReadMessage: "Notification has been marked as read",
      allMarkedAsRead: "All marked as read",
      allMarkedAsReadMessage: "All notifications have been marked as read",
      noNotifications: "No notifications yet",
      newSeason: "New Season Available",
      newSeasonMessage: "Stranger Things Season 5 is now available to stream!",
      newRecommendation: "New Recommendation",
      newRecommendationMessage: "Based on your watch history, we think you'll love 'The Witcher'",
      accountUpdate: "Account Update",
      accountUpdateMessage: "Your subscription will renew in 7 days",
      newRelease: "New Release",
      newReleaseMessage: "Dune: Part Two is now available to stream",
      watchlistUpdate: "Watchlist Update",
      watchlistUpdateMessage: "A title in your watchlist is about to expire",
    },
    profile: {
      title: "Profile",
      editProfile: "Edit Profile",
      accountSettings: "Account Settings",
      watchHistory: "Watch History",
      savedItems: "Saved Items",
      memberSince: "Member Since",
      plan: "Plan",
      nextBilling: "Next Billing",
      managePlan: "Manage Plan",
      personalInfo: "Personal Information",
      updatePersonalInfo: "Update your personal information",
      saveChanges: "Save Changes",
      recentlyWatched: "Your recently watched content",
      clearHistory: "Clear History",
      preferences: "Preferences",
      managePreferences: "Manage your preferences",
      language: "Language",
      contentPreferences: "Content Preferences",
      savePreferences: "Save Preferences",
    },
    myList: {
      empty: "Your list is empty",
      emptyMessage: "Add movies, TV shows, and anime to your list to watch them later",
      browseContent: "Browse Content",
      addedOn: "Added on",
    },
    authors: {
      title: "Our Content Creators",
      description:
        "Meet the talented writers, critics, and experts who bring you the best reviews, recommendations, and insights about movies, TV shows, and anime.",
      articles: "Articles",
      followers: "followers",
      viewProfile: "View Profile",
      joinTeam: "Join Our Team",
      joinDescription:
        "Are you passionate about movies, TV shows, or anime? We're always looking for talented writers to join our team.",
      applyNow: "Apply Now",
    },
    footer: {
      description:
        "The best platform to watch movies, TV shows, and anime in high quality with server-side rendering for optimal performance.",
      navigation: "Navigation",
      legal: "Legal",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      dmca: "DMCA",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      address: "Address",
      allRights: "All rights reserved.",
    },
    scan: {
      title: "Scan QR Code",
      camera: "Camera",
      upload: "Upload",
      scanQrCode: "Scan QR Code",
      scanDescription: "Point your camera at a QR code to scan it",
      uploadQrCode: "Upload QR Code",
      uploadDescription: "Upload an image containing a QR code",
      result: "Result",
      openLink: "Open Link",
      startScanning: "Start Scanning",
      scanning: "Scanning...",
      readyToScan: "Ready to scan",
      dragAndDrop: "Drag and drop or click to upload",
      cameraError: "Camera access denied",
      cameraErrorDescription: "Please allow camera access to scan QR codes",
    },
    settings: {
      title: "Settings",
      saved: "Settings saved",
      savedDescription: "Your settings have been saved successfully",
      appearance: "Appearance",
      appearanceDescription: "Customize how StreamFlix looks",
      theme: "Theme",
      dark: "Dark",
      light: "Light",
      system: "System",
      language: "Language",
      notifications: "Notifications",
      notificationsDescription: "Manage your notification preferences",
      emailNotifications: "Email Notifications",
      emailNotificationsDescription: "Receive notifications via email",
      pushNotifications: "Push Notifications",
      pushNotificationsDescription: "Receive notifications on your device",
      newContentNotifications: "New Content",
      newContentNotificationsDescription: "Get notified when new content is available",
      recommendationNotifications: "Recommendations",
      recommendationNotificationsDescription: "Get personalized content recommendations",
      playback: "Playback",
      playbackDescription: "Customize your viewing experience",
      autoplay: "Autoplay",
      autoplayDescription: "Automatically play the next episode",
      quality: "Video Quality",
      auto: "Auto",
      high: "High (1080p)",
      medium: "Medium (720p)",
      low: "Low (480p)",
      volume: "Default Volume",
      subtitles: "Subtitles",
      subtitlesDescription: "Show subtitles when available",
      privacy: "Privacy & Security",
      privacyDescription: "Manage your privacy and security settings",
      watchHistory: "Watch History",
      watchHistoryDescription: "Save your watch history for recommendations",
      dataSaving: "Data Saving Mode",
      dataSavingDescription: "Reduce data usage when streaming",
      twoFactor: "Two-Factor Authentication",
      twoFactorDescription: "Add an extra layer of security to your account",
      deleteAccount: "Delete Account",
      saveChanges: "Save Changes",
    },
    plans: {
      title: "Choose Your Plan",
      subtitle: "Select the perfect streaming plan that fits your needs",
      basic: "Basic",
      standard: "Standard",
      premium: "Premium",
      basicDescription: "Perfect for casual viewers",
      standardDescription: "Our most popular plan",
      premiumDescription: "Ultimate streaming experience",
      hdStreaming: "HD Streaming",
      fullHdStreaming: "Full HD Streaming",
      ultraHdStreaming: "Ultra HD (4K) Streaming",
      watchOnTwoDevices: "Watch on 2 devices",
      watchOnFourDevices: "Watch on 4 devices",
      watchOnSixDevices: "Watch on 6 devices",
      downloadContent: "Download content",
      adFree: "Ad-free experience",
      exclusiveContent: "Exclusive content",
      mostPopular: "Most Popular",
      selectPlan: "Select Plan",
      planSelected: "Plan selected",
      planSelectedDescription: "You can change your plan anytime",
      faq: "Frequently Asked Questions",
      faqCancel: "Can I cancel anytime?",
      faqCancelAnswer:
        "Yes, you can cancel your subscription at any time. Your subscription will remain active until the end of your current billing period.",
      faqChange: "Can I change my plan later?",
      faqChangeAnswer:
        "Absolutely! You can upgrade or downgrade your plan at any time. Changes to your subscription will take effect on your next billing date.",
      faqDevices: "What devices can I watch on?",
      faqDevicesAnswer:
        "You can watch on any device including smart TVs, smartphones, tablets, streaming media players, and game consoles. The number of devices you can use simultaneously depends on your plan.",
    },
  },
  ar: {
    common: {
      playNow: "شغل الآن",
      moreInfo: "المزيد من المعلومات",
      searchPlaceholder: "ابحث عن أفلام، مسلسلات، والمزيد...",
      filter: "تصفية",
      genres: "الأنواع",
      openLink: "فتح الرابط",
      saveChanges: "حفظ التغييرات",
    },
    nav: {
      home: "الرئيسية",
      movies: "أفلام",
      tvShows: "مسلسلات",
      anime: "أنمي",
      myList: "قائمتي",
      profile: "الملف الشخصي",
      settings: "الإعدادات",
      scan: "مسح",
    },
    auth: {
      signIn: "تسجيل الدخول",
      signOut: "تسجيل الخروج",
      signUp: "إنشاء حساب",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      name: "الاسم",
      forgotPassword: "نسيت كلمة المرور؟",
      noAccount: "ليس لديك حساب؟",
      hasAccount: "لديك حساب بالفعل؟",
      signInDescription: "أدخل بيانات الاعتماد الخاصة بك للوصول إلى حسابك",
      signUpDescription: "قم بإنشاء حساب جديد للبدء",
    },
    categories: {
      movie: "فيلم",
      tvShow: "مسلسل",
      anime: "أنمي",
    },
    home: {
      featuredTitle: "قاتل الشياطين: كيميتسو نو يايبا",
      featuredDescription:
        "صبي تربى على يد الخنازير، يرتدي رأس خنزير، يصعد على متن قطار اللانهاية في مهمة جديدة مع عمود اللهب جنبًا إلى جنب مع صبي آخر يكشف عن قوته الحقيقية عندما ينام.",
      featured: "مميز",
      trendingNow: "الأكثر رواجًا الآن",
      newReleases: "أحدث الإصدارات",
      popularAnime: "أنمي شائع",
      popularTVShows: "مسلسلات شائعة",
    },
    notifications: {
      title: "الإشعارات",
      markRead: "تعيين كمقروء",
      markAllRead: "تعيين الكل كمقروء",
      markedAsRead: "تم التعيين كمقروء",
      markedAsReadMessage: "تم تعيين الإشعار كمقروء",
      allMarkedAsRead: "تم تعيين الكل كمقروء",
      allMarkedAsReadMessage: "تم تعيين جميع الإشعارات كمقروءة",
      noNotifications: "لا توجد إشعارات حتى الآن",
      newSeason: "موسم جديد متاح",
      newSeasonMessage: "الموسم الخامس من Stranger Things متاح الآن للمشاهدة!",
      newRecommendation: "توصية جديدة",
      newRecommendationMessage: "بناءً على سجل المشاهدة الخاص بك، نعتقد أنك ستحب 'The Witcher'",
      accountUpdate: "تحديث الحساب",
      accountUpdateMessage: "سيتم تجديد اشتراكك خلال 7 أيام",
      newRelease: "إصدار جديد",
      newReleaseMessage: "Dune: Part Two متاح الآن للمشاهدة",
      watchlistUpdate: "تحديث قائمة المشاهدة",
      watchlistUpdateMessage: "عنوان في قائمة المشاهدة الخاصة بك على وشك انتهاء الصلاحية",
    },
    profile: {
      title: "الملف الشخصي",
      editProfile: "تعديل الملف الشخصي",
      accountSettings: "إعدادات الحساب",
      watchHistory: "سجل المشاهدة",
      savedItems: "العناصر المحفوظة",
      memberSince: "عضو منذ",
      plan: "الخطة",
      nextBilling: "الفاتورة القادمة",
      managePlan: "إدارة الخطة",
      personalInfo: "المعلومات الشخصية",
      updatePersonalInfo: "تحديث معلوماتك الشخصية",
      saveChanges: "حفظ التغييرات",
      recentlyWatched: "المحتوى الذي شاهدته مؤخرًا",
      clearHistory: "مسح السجل",
      preferences: "التفضيلات",
      managePreferences: "إدارة تفضيلاتك",
      language: "اللغة",
      contentPreferences: "تفضيلات المحتوى",
      savePreferences: "حفظ التفضيلات",
    },
    myList: {
      empty: "قائمتك فارغة",
      emptyMessage: "أضف أفلامًا ومسلسلات وأنمي إلى قائمتك لمشاهدتها لاحقًا",
      browseContent: "تصفح المحتوى",
      addedOn: "أضيف في",
    },
    authors: {
      title: "منشئو المحتوى لدينا",
      description:
        "تعرف على الكتاب والنقاد والخبراء الموهوبين الذين يقدمون لك أفضل المراجعات والتوصيات والرؤى حول الأفلام والمسلسلات والأنمي.",
      articles: "المقالات",
      followers: "المتابعين",
      viewProfile: "عرض الملف الشخصي",
      joinTeam: "انضم إلى فريقنا",
      joinDescription:
        "هل أنت شغوف بالأفلام أو المسلسلات أو الأنمي؟ نحن نبحث دائمًا عن كتاب موهوبين للانضمام إلى فريقنا.",
      applyNow: "قدم الآن",
    },
    footer: {
      description: "أفضل منصة لمشاهدة الأفلام والمسلسلات والأنمي بجودة عالية مع عرض من جانب الخادم للأداء الأمثل.",
      navigation: "التنقل",
      legal: "قانوني",
      terms: "شروط الخدمة",
      privacy: "سياسة الخصوصية",
      cookies: "سياسة ملفات تعريف الارتباط",
      dmca: "DMCA",
      contact: "اتصل بنا",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      address: "العنوان",
      allRights: "جميع الحقوق محفوظة.",
    },
    scan: {
      title: "مسح رمز QR",
      camera: "الكاميرا",
      upload: "رفع",
      scanQrCode: "مسح رمز QR",
      scanDescription: "وجه الكاميرا نحو رمز QR لمسحه",
      uploadQrCode: "رفع رمز QR",
      uploadDescription: "قم برفع صورة تحتوي على رمز QR",
      result: "النتيجة",
      openLink: "فتح الرابط",
      startScanning: "بدء المسح",
      scanning: "جاري المسح...",
      readyToScan: "جاهز للمسح",
      dragAndDrop: "اسحب وأفلت أو انقر للرفع",
      cameraError: "تم رفض الوصول إلى الكاميرا",
      cameraErrorDescription: "يرجى السماح بالوصول إلى الكاميرا لمسح رموز QR",
    },
    settings: {
      title: "الإعدادات",
      saved: "تم حفظ الإعدادات",
      savedDescription: "تم حفظ إعداداتك بنجاح",
      appearance: "المظهر",
      appearanceDescription: "تخصيص مظهر StreamFlix",
      theme: "السمة",
      dark: "داكن",
      light: "فاتح",
      system: "النظام",
      language: "اللغة",
      notifications: "الإشعارات",
      notificationsDescription: "إدارة تفضيلات الإشعارات الخاصة بك",
      emailNotifications: "إشعارات البريد الإلكتروني",
      emailNotificationsDescription: "تلقي الإشعارات عبر البريد الإلكتروني",
      pushNotifications: "الإشعارات المنبثقة",
      pushNotificationsDescription: "تلقي الإشعارات على جهازك",
      newContentNotifications: "محتوى جديد",
      newContentNotificationsDescription: "الحصول على إشعارات عند توفر محتوى جديد",
      recommendationNotifications: "التوصيات",
      recommendationNotificationsDescription: "الحصول على توصيات محتوى مخصصة",
      playback: "التشغيل",
      playbackDescription: "تخصيص تجربة المشاهدة الخاصة بك",
      autoplay: "التشغيل التلقائي",
      autoplayDescription: "تشغيل الحلقة التالية تلقائيًا",
      quality: "جودة الفيديو",
      auto: "تلقائي",
      high: "عالي (1080p)",
      medium: "متوسط (720p)",
      low: "منخفض (480p)",
      volume: "مستوى الصوت الافتراضي",
      subtitles: "الترجمات",
      subtitlesDescription: "عرض الترجمات عند توفرها",
      privacy: "الخصوصية والأمان",
      privacyDescription: "إدارة إعدادات الخصوصية والأمان الخاصة بك",
      watchHistory: "سجل المشاهدة",
      watchHistoryDescription: "حفظ سجل المشاهدة الخاص بك للتوصيات",
      dataSaving: "وضع توفير البيانات",
      dataSavingDescription: "تقليل استخدام البيانات عند البث",
      twoFactor: "المصادقة الثنائية",
      twoFactorDescription: "إضافة طبقة إضافية من الأمان إلى حسابك",
      deleteAccount: "حذف الحساب",
      saveChanges: "حفظ التغييرات",
    },
    plans: {
      title: "اختر خطتك",
      subtitle: "حدد خطة البث المثالية التي تناسب احتياجاتك",
      basic: "أساسي",
      standard: "قياسي",
      premium: "متميز",
      basicDescription: "مثالي للمشاهدين العاديين",
      standardDescription: "خطتنا الأكثر شعبية",
      premiumDescription: "تجربة بث فائقة",
      hdStreaming: "بث بدقة HD",
      fullHdStreaming: "بث بدقة Full HD",
      ultraHdStreaming: "بث بدقة Ultra HD (4K)",
      watchOnTwoDevices: "المشاهدة على جهازين",
      watchOnFourDevices: "المشاهدة على 4 أجهزة",
      watchOnSixDevices: "المشاهدة على 6 أجهزة",
      downloadContent: "تنزيل المحتوى",
      adFree: "تجربة بدون إعلانات",
      exclusiveContent: "محتوى حصري",
      mostPopular: "الأكثر شعبية",
      selectPlan: "اختر الخطة",
      planSelected: "تم اختيار الخطة",
      planSelectedDescription: "يمكنك تغيير خطتك في أي وقت",
      faq: "الأسئلة الشائعة",
      faqCancel: "هل يمكنني الإلغاء في أي وقت؟",
      faqCancelAnswer: "نعم، يمكنك إلغاء اشتراكك في أي وقت. سيظل اشتراكك نشطًا حتى نهاية فترة الفوترة الحالية.",
      faqChange: "هل يمكنني تغيير خطتي لاحقًا؟",
      faqChangeAnswer:
        "بالتأكيد! يمكنك ترقية أو تخفيض خطتك في أي وقت. ستصبح التغييرات على اشتراكك سارية في تاريخ الفوترة التالي.",
      faqDevices: "ما هي الأجهزة التي يمكنني المشاهدة عليها؟",
      faqDevicesAnswer:
        "يمكنك المشاهدة على أي جهاز بما في ذلك أجهزة التلفزيون الذكية والهواتف الذكية والأجهزة اللوحية ومشغلات الوسائط وأجهزة الألعاب. يعتمد عدد الأجهزة التي يمكنك استخدامها في وقت واحد على خطتك.",
    },
  },
}

export async function getDictionary(locale: string) {
  // In a real app, this might fetch from an API or file system
  return dictionaries[locale] || dictionaries.en
}

