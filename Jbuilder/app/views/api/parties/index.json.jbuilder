puts 'hi'
json.array! @parties do |party|
  json.partial! 'party', party: party
  json.guests do
    old_guests = party.guests.select do |guest|
      guest['age'] >= 40 && guest['age'] <= 50
    end
    json.array! old_guests do |guest|
      json.name guest.name
    end
  end
end
