import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useCamps } from "@/contexts/CampsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Plus, X } from "lucide-react";

const ListCamp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addCamp } = useCamps();

  const [formData, setFormData] = useState({
    name: '',
    organizer: '',
    type: '' as 'govt' | 'ngo' | 'private',
    date: '',
    time: '',
    location: '',
    city: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
    verified: false,
    participants: '0'
  });

  const [services, setServices] = useState<string[]>([]);
  const [newService, setNewService] = useState('');

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addService = () => {
    if (newService.trim() && !services.includes(newService.trim())) {
      setServices(prev => [...prev, newService.trim()]);
      setNewService('');
    }
  };

  const removeService = (serviceToRemove: string) => {
    setServices(prev => prev.filter(service => service !== serviceToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.organizer || !formData.type || !formData.date || 
        !formData.time || !formData.location || !formData.city || services.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and add at least one service.",
        variant: "destructive"
      });
      return;
    }

    const campData = {
      ...formData,
      services,
      participants: `${formData.participants}+ expected`
    };

    addCamp(campData);
    
    toast({
      title: "Success!",
      description: "Your health camp has been listed successfully.",
    });

    navigate('/find-camps');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-4">
                List Your Health Camp
              </h1>
              <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
                Help your community by listing your health camp. Reach more people and make healthcare accessible.
              </p>
            </div>

            {/* Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">
                    Basic Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Camp Name *</Label>
                      <Input
                        id="name"
                        placeholder="e.g., Free Eye Checkup Camp"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organizer">Organizer Name *</Label>
                      <Input
                        id="organizer"
                        placeholder="e.g., Government Hospital"
                        value={formData.organizer}
                        onChange={(e) => handleInputChange('organizer', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Organizer Type *</Label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select organizer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="govt">Government</SelectItem>
                          <SelectItem value="ngo">NGO</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="participants">Expected Participants</Label>
                      <Input
                        id="participants"
                        type="number"
                        placeholder="e.g., 100"
                        value={formData.participants}
                        onChange={(e) => handleInputChange('participants', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">
                    Schedule
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time *</Label>
                      <Input
                        id="time"
                        placeholder="e.g., 9:00 AM - 5:00 PM"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">
                    Location
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Venue Address *</Label>
                      <Input
                        id="location"
                        placeholder="e.g., Community Center, Sector 15"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="e.g., Delhi"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">
                    Services Offered *
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a service (e.g., Eye Examination)"
                        value={newService}
                        onChange={(e) => setNewService(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addService())}
                      />
                      <Button type="button" onClick={addService}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="gap-1">
                          {service}
                          <button
                            type="button"
                            onClick={() => removeService(service)}
                            className="hover:text-destructive"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">
                    Additional Details
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide additional details about your health camp..."
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={4}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">Contact Email</Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          placeholder="contact@example.com"
                          value={formData.contactEmail}
                          onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">Contact Phone</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          placeholder="+91-9876543210"
                          value={formData.contactPhone}
                          onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verification */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="verified"
                    checked={formData.verified}
                    onCheckedChange={(checked) => handleInputChange('verified', checked as boolean)}
                  />
                  <Label htmlFor="verified" className="text-sm">
                    I certify that this information is accurate and the health camp is legitimate
                  </Label>
                </div>

                {/* Submit */}
                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    List Health Camp
                  </Button>
                  <Button type="button" variant="outline" onClick={() => navigate('/')}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListCamp;