import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Clock, Users, Shield, Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Camp = {
  _id: string;
  name: string;
  organizer: string;
  type: string;
  verified?: boolean;
  date: string;
  time: string;
  location: string;
  distance?: string;
  participants?: number;
  services: string[];
};

const FindCamps = () => {
  const [camps, setCamps] = useState<Camp[]>([]);
  const [filteredCamps, setFilteredCamps] = useState<Camp[]>([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/camp') // Adjust the URL/port if needed
      .then(res => res.json())
      .then(data => {
        setCamps(data);
        setFilteredCamps(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSearch = () => {
    let results = camps;

    if (searchLocation.trim() !== '') {
      results = results.filter(camp =>
        camp.location?.toLowerCase().includes(searchLocation.trim().toLowerCase())
      );
    }

    if (selectedType !== 'all') {
      results = results.filter(camp => camp.type === selectedType);
    }

    setFilteredCamps(results);
  };

  const getOrganizerBadge = (type: string) => {
    switch (type) {
      case 'govt':
        return <Badge className="bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20">Government</Badge>;
      case 'ngo':
        return <Badge className="bg-primary/10 text-primary border-primary/20">NGO</Badge>;
      case 'private':
        return <Badge className="bg-healthcare-accent/10 text-healthcare-accent border-healthcare-accent/20">Private</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Search Section */}
      <section className="py-16 bg-healthcare-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Find Health Camps Near You
            </h1>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover free health camps happening in your area. Search by location and filter by organizer type.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter your city or location..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div className="lg:w-48">
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="govt">Government</SelectItem>
                      <SelectItem value="ngo">NGO</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleSearch} className="h-12 px-8">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-bold text-2xl text-foreground">
              Available Health Camps ({filteredCamps.length})
            </h2>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-12 h-12 text-muted-foreground animate-pulse" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-2">
                Loading camps...
              </h3>
            </div>
          ) : (
            <>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCamps.map((camp) => (
                  <Card key={camp._id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-xl text-foreground mb-2">
                            {camp.name}
                          </h3>
                          <p className="font-open-sans text-muted-foreground text-sm">
                            by {camp.organizer}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          {getOrganizerBadge(camp.type)}
                          {camp.verified && (
                            <Badge className="bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-open-sans text-sm text-foreground">{camp.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-open-sans text-sm text-foreground">{camp.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-primary" />
                          <div className="flex-1">
                            <span className="font-open-sans text-sm text-foreground">{camp.location}</span>
                            {camp.distance && (
                              <span className="font-open-sans text-sm text-healthcare-success ml-2">
                                ({camp.distance} away)
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="font-open-sans text-sm text-foreground">{camp.participants}</span>
                        </div>
                      </div>

                      {/* Services */}
                      <div className="mb-6">
                        <h4 className="font-open-sans font-medium text-sm text-foreground mb-3">Services Offered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {camp.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-3">
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          View Details & Register
                        </Button>
                        <Button variant="outline" className="w-full">
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredCamps.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-2">
                    No camps found
                  </h3>
                  <p className="font-open-sans text-muted-foreground">
                    Try searching for a different location or adjust your filters.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindCamps;