import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { 
  PlusCircle, 
  Image, 
  Eye, 
  Send, 
  Sparkles, 
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  TrendingUp
} from 'lucide-react'

export default function Dashboard({ onLogout }) {
  const [postContent, setPostContent] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewMode, setPreviewMode] = useState(false)
  const [activeTab, setActiveTab] = useState('create')

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setSelectedImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const generateContent = () => {
    const sampleContent = "🍕 عرض خاص لفترة محدودة!\n\nاستمتع بأشهى البيتزا الإيطالية الأصيلة مع خصم 25% على جميع الأصناف.\n\n✨ مكونات طازجة يومياً\n🔥 طعم لا يُقاوم\n⏰ توصيل سريع خلال 30 دقيقة\n\nاطلب الآن واستمتع بتجربة طعام استثنائية!\n\n#بيتزا #عرض_خاص #طعام_إيطالي #توصيل_سريع"
    setPostContent(sampleContent)
  }

  const mockPosts = [
    { id: 1, content: "عرض خاص على القهوة التركية...", platform: "Instagram", status: "منشور", engagement: "245 إعجاب" },
    { id: 2, content: "وجبة الإفطار الشامية الأصيلة...", platform: "Facebook", status: "مجدول", time: "غداً 9:00 ص" },
    { id: 3, content: "حلويات رمضانية تقليدية...", platform: "Twitter", status: "مسودة", engagement: "في الانتظار" }
  ]

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SmartMenu</h1>
              <p className="text-sm text-gray-600">لوحة التحكم</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 ml-2" />
              الإعدادات
            </Button>
            <Button variant="outline" size="sm" onClick={onLogout}>
              <LogOut className="h-4 w-4 ml-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-l border-gray-200 min-h-screen p-4">
          <nav className="space-y-2">
            <Button 
              variant={activeTab === 'create' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('create')}
            >
              <PlusCircle className="h-4 w-4 ml-2" />
              إنشاء منشور
            </Button>
            <Button 
              variant={activeTab === 'posts' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('posts')}
            >
              <Calendar className="h-4 w-4 ml-2" />
              المنشورات
            </Button>
            <Button 
              variant={activeTab === 'analytics' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('analytics')}
            >
              <BarChart3 className="h-4 w-4 ml-2" />
              التحليلات
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'create' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">إنشاء منشور جديد</h2>
                <Badge variant="secondary" className="text-sm">
                  <Sparkles className="h-3 w-3 ml-1" />
                  مدعوم بالذكاء الاصطناعي
                </Badge>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Content Creation */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PlusCircle className="h-5 w-5 ml-2" />
                      محتوى المنشور
                    </CardTitle>
                    <CardDescription>
                      اكتب محتوى منشورك أو استخدم الذكاء الاصطناعي لإنشاء محتوى مميز
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="content">النص</Label>
                      <Textarea
                        id="content"
                        placeholder="اكتب محتوى منشورك هنا..."
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        rows={8}
                        className="resize-none"
                      />
                    </div>
                    
                    <Button 
                      onClick={generateContent}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <Sparkles className="h-4 w-4 ml-2" />
                      إنشاء محتوى بالذكاء الاصطناعي
                    </Button>

                    <div className="space-y-2">
                      <Label htmlFor="image">الصورة</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        {selectedImage ? (
                          <div className="space-y-2">
                            <img src={selectedImage} alt="Preview" className="max-h-32 mx-auto rounded" />
                            <Button variant="outline" size="sm" onClick={() => setSelectedImage(null)}>
                              إزالة الصورة
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Image className="h-8 w-8 mx-auto text-gray-400" />
                            <div>
                              <label htmlFor="image-upload" className="cursor-pointer">
                                <span className="text-blue-600 hover:text-blue-800 font-medium">اختر صورة</span>
                                <span className="text-gray-600"> أو اسحبها هنا</span>
                              </label>
                              <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                              />
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF حتى 10MB</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Preview & Publishing */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Eye className="h-5 w-5 ml-2" />
                      معاينة ونشر
                    </CardTitle>
                    <CardDescription>
                      اختر المنصات ووقت النشر
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Platform Selection */}
                    <div className="space-y-2">
                      <Label>المنصات</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="justify-start">
                          <Facebook className="h-4 w-4 ml-2 text-blue-600" />
                          Facebook
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Instagram className="h-4 w-4 ml-2 text-pink-600" />
                          Instagram
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Twitter className="h-4 w-4 ml-2 text-blue-400" />
                          Twitter
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Linkedin className="h-4 w-4 ml-2 text-blue-700" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="space-y-2">
                      <Label>معاينة المنشور</Label>
                      <div className="bg-gray-50 rounded-lg p-4 border">
                        {postContent ? (
                          <div className="space-y-2">
                            <p className="text-sm whitespace-pre-wrap">{postContent}</p>
                            {selectedImage && (
                              <img src={selectedImage} alt="Preview" className="max-h-40 rounded" />
                            )}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-sm">اكتب محتوى لرؤية المعاينة</p>
                        )}
                      </div>
                    </div>

                    {/* Scheduling */}
                    <div className="space-y-2">
                      <Label htmlFor="schedule">وقت النشر</Label>
                      <div className="flex space-x-2 space-x-reverse">
                        <Input type="date" className="flex-1" />
                        <Input type="time" className="flex-1" />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={!postContent}
                      >
                        <Send className="h-4 w-4 ml-2" />
                        نشر تجريبي
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        disabled={!postContent}
                      >
                        <Clock className="h-4 w-4 ml-2" />
                        جدولة المنشور
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">إدارة المنشورات</h2>
              
              <div className="grid gap-4">
                {mockPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{post.content}</p>
                          <div className="flex items-center space-x-4 space-x-reverse mt-2 text-sm text-gray-600">
                            <span className="flex items-center">
                              {post.platform === 'Instagram' && <Instagram className="h-4 w-4 ml-1 text-pink-600" />}
                              {post.platform === 'Facebook' && <Facebook className="h-4 w-4 ml-1 text-blue-600" />}
                              {post.platform === 'Twitter' && <Twitter className="h-4 w-4 ml-1 text-blue-400" />}
                              {post.platform}
                            </span>
                            <Badge variant={post.status === 'منشور' ? 'default' : post.status === 'مجدول' ? 'secondary' : 'outline'}>
                              {post.status}
                            </Badge>
                            <span>{post.engagement || post.time}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 space-x-reverse">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">التحليلات والإحصائيات</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">إجمالي المنشورات</p>
                        <p className="text-2xl font-bold text-gray-900">24</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">إجمالي التفاعل</p>
                        <p className="text-2xl font-bold text-gray-900">1,234</p>
                      </div>
                      <BarChart3 className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">معدل التفاعل</p>
                        <p className="text-2xl font-bold text-gray-900">4.2%</p>
                      </div>
                      <Sparkles className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>أداء المنصات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Instagram className="h-5 w-5 text-pink-600" />
                        <span className="font-medium">Instagram</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-pink-600 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">75%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Facebook className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Facebook</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">60%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Twitter className="h-5 w-5 text-blue-400" />
                        <span className="font-medium">Twitter</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">45%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

