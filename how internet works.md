### How the internet became:
The internet actually had its origin from the cold war. After WW2, the US and Soviet Union (Russia) were trying to one-up each other in who was the better super power which led the cold war- a non physical combat war with military but a period of great political tension where the US and SU looked daggers at each other (both suspicious of each other in a hostile manner). A by product of the cold war was the 'space race' and when the SU lauched the sputnik (the first artificial satellite to orbit the earth for about 3 months) the US didnt take it gently. So in order to keep their eyes at all times on the SU and to ensure that the US had the better technology, the then US president Eisenhower, created DARPA (Defence Advanced Researh Projects Agency). This research agency were in top universities in the US and needed to be in constant and almost instanteneous communication with one another and just using telephones was not cutting it. So they thought of how to create a network of their computers (keep in mind that those days, the computers aka mainframes were large, heavy and confusing assembly of components, almost the size of a living room). The main idea was that, if they were able to find a way to connect all the research institutes computers so the are constantly talking to each other, a lot more work would be done. This was made possible by the idea proposed by a scientist J.C.R Licklider who said, what if instead of having telephones at the end of phone lines (land lines), why don't we have computers connected. This idea came to fruition and DARPA created the Advanced Research Projects Agency Network also known as ARPANET. In a way, what lead to the creation of ARPANET was history repeating itself the USA. Before telephones and telephone lines were invented, there was a presidential election that took two years to count because the ballots chad to be gathered and mailed manually to the counting point. As technology advanced, the Morse code system (electrical signals that have been encoded to spell out letters) was used to transmit messages for long distances enabled by copper wires buried in the ground and this helped in counting election ballots much faster. Mainframes connected to a phone line behave similarly but instead of electrical pulses being interpreted as Morse code, they are interpreted as a protocol. Thanks to the complex capabilities of computers, instead of just sending letters, they can send things like data, software - lines of code that can tell  a computer what to do.

Computer data is complicated. How are we able to send it the same way we send something simple like morse code over a line. In secondary school we learnt that if we let a ray of light pass throgh a prism, the light gets split into its various component colours. Data transmission is made to move like that but in the opposite sense. This is made possible by modulation which simply put takes an inpit consisting of multiple signals and converts it into one signal that travels through the line which is then demodulated back into its original form on the other side. Machines that specialize in doing this are called MODEMS. Although a lot of details has beem omitted, this is essentially the reason complex data can be sent over the lines.

The very first ARPANET connection occurred on Oct 30 1969 btw Charlie Kline of UCLA and Bill Duvall of Stanford university. Kline intended to send the word 'LOGIN' over to Duvall. L and O was received before the system crashed. This taught them a very important lesson about how to maximize their use of these phone lines. And that way was called 'packet switching'. So because there is a possibility of a network channel becoming temporarily faulty, what packet switching does is that it takes the data to be transmitted, cuts it into a bunch of little pieces and sends each piece through many different channels on the network and pieces them together on the other side. This made sending files over the network much more reliable so worse case scenario, if one or two of these network channels were down, only a few parts of the file would be missing rather than the whole thing and the recipient could see this and request the sender to send the missing pieces.

After these ground breaking achievements, APRANET continued to improve and to facilitate the sending of messages over ARPANET, programmer Ray Thomilson created a messaging program that separated the name of the user and the machine they were using with the less commonly used @ symbol (@ was not a commonly used symbol then), [user]@[machine_nanme] thereby technically giving birth to the EMAIL and he called it EMAIL. We can say that in 1971, the internet, text messaging and message threads technically did exist but limited to universities, gov agencies, labs etc.

ARPANET was far from perfect. While it was a complex network of computers, it was more of an INTRANET - a network of computers that is provate and limited to only one company. When it connected to England's NPL network, it became an EXTRANET. A private network that allows only a specific outside party access. If it was going to get bigger, a few things needed to be corrected. For instance, MIT student, Nadia Perlman noticed a huge vulnerability in the network. The more sophisticated a network gets, the more likely that you will have paths that can get problematic also called bridge loop which can crash an entire network and the only way to fix it would be to rebooth the entire network. This is not practical for a network as big as ARPANET. In just under a week, Perlman would create the STP or Spanning Tree Protocol whch blocks off these bridge loop while still allowing all the pieces of data to move through multiple paths on network. 

As ARPANET got bigger, so did its influence on other networks, and soon many other kinds of networks sprang up. Computers have been made to connect with each other. What if networks can be made to connect with each other to create an INTER-NETWORK (internet). Internetwork was not easy because for it to happen, both network must have the same configuration. Think of it as trying to speak to multiple people who all spoke different languages. So what if we could create a language that everyone spoke.

Everything would change forever on Jan 1, 1983 when ARPANET would adopt the TCP/IP - Transfer Control Protocol and Internet Protocol. Created by Vinton Cerf and Bob Khan, these protocols did many great things including giving each computer its own distinct number - called an IP address, being able to detect and automatically resend packets that are lost in transmission - no longer requiring user to do it manually and being able to confirm that a transmission was successfully delivered. It also came with the UDP - User Datagram Protocol which was a little less strict. Unlike TCP, UDP didnt prioritize making sure that everything was delivered properly, instead it focused on transmitting data faster. TCP is like the mail man not giving you your package until you pay for it, while UDP is like the mail man at the front of your house. You get faster speeds but at the expense of things getting lost. Jan 1 1983 was basically the day that a bunch of intranets and extranets came together to become one big unified INTERNET.

Now that the internet was more robust and reliable than ever, it was time to start making it easier to use. What if instead of typing in a bunch of numbers to access a server, you could just type in something easy to remember - like a name.  Head of the network information centre, Elizabteth Feinler was in charge of documenting almost everything about ARPANET and essentially created a phonebook listing the name of a server and its numerical address (IP address). At first, these phonebook was called HOST.TXT and each computer on the network would automatically have access to it. Feinler suggested that the names should be created based on the physical location of the computer e.g .com for commercial, .gov for govt, .net for network, .org for organization, .edu for education, .mil for military. Feinler and her team had created the Host Naming Registry and the WHOIS protocol but the issue was that this phonebook had to be updated manually and if you want your domain added to the registry, you had to call and have her put it in for you. As the internet grew and more domains were registered this would become impractical and this one file (HOST.TXT) would become too big. Paul would build on Feinler system and come uo with the DOMAIN NAME SYSTEM -DNS. Instead of a single HOST.TXT directory, you now have basically a bunch of HOST.TXT directories, all on different machines and these would all form their own network and all the other network would connect to that DNS network and any changes to the directories (the phonebook) would now be done automatically.

Over time, more networks around the world would become part of the internet and infact ARPANET became outdated and eventually decommissioned and as computers became more personal, more people could use it and it was no longer limited to researchers and scientists. It was now time for the internet to become even more simpler. It came about when am employee (Tim Berners-Lee) working for the Swiss research facility CERN was frustrated by how complicated it was to share data in an organized and more structured manner. He then invented the HTTP and HTML, developed the URL (a standardized way to identify and locate web resources), buit the first web browser and first web server. He conceptualized the World wide web when he envisioned a hypertext system where users are able to share information using web browsers and hyperlinks.The first website was made public in 1991. The World Wide Web could be accessed on the internet through web browsers at the time such as Nexus, Lynx and Mosaic. Al Gore a US politician was amazed at this growing internet technology which he called an information superhighway and wanted to give it as much publicity as possible so he proposed the Gore bill of 1991 helped provide internet access to children in public schools and local libraries.

As the audience for the internet grew, companies saw a new market for profit and (internet service) providers were popping up left and right. They give you a modem which you hook to your phone line and computer and like that you are connected to the internet. Just ensure no one in your house needs to use the phone. It graduated from leaving the dial up to digital subscriber line using splitter, then to cable modem and fibre-optic as technology advanced and as technology advanced even further, we had internet transmission via radio waves giving rise to Mobile networks like the 4G, 5G, Wi-Fi for LAN connectivity and Satellite communication between satellites and ground stations that we have today.

### How the internet works
The internet (internetwork) is the sum total of all the infrastructure that enables the interconnection of billions of computers all across the world and ensures that, whatever happens, they find a way to stay connected.

It is the technical infrastructure that makes the Web possible.

It began in the 1960s as a US-army-funded research project, then evolved into a public infrastructure in the 1980s with the support of many public universities and private companies. The various technologies that support the internet have evolved over time,but the way it works hasn't changed much.

-> Simple network:
When two computers need to commnucate, we have to link them either physically or wirelessly. Say we use physical cables in our discussion of how the internet works for simplicity. By so doing, they have formed a small network.

If two computers are possible, why not more, just get the connecting cables right? Yes, in theory but you would have to imagine that you would need as many connecting slots on a computer as the number of computers it wants to connect to. For instance, 9 connecting slots + 9 connecting cables + 9 other computers for a computer that wants to connect to 9 computers. No imagine all wants to interconnect/handshake, it means 10 total computers with 10 connecing slots and 45 cables for the handshake. No imagine how messy this network will look and as more gets added, it gets more complicated. How many connecting slots would fit on a desktop or laptop computer to equip it for a network participation?

At the start, this problem was solved by connecting each computer to a central  special tiny computer called a network switch (switch for short). Its job is to take incoming messages from any computer and relay it to the correct recipent computer. ie say computer A wants to communicate with B, if first sends the message to the switch and the switch forwards the message to B. Computer B does not get messages intended for other computers and none of the messages meant for computer B reach other computers on the Local Area Network. Think of switch as the what ties together a LAN.

Now with a swith, the computers only need one cable each to connect with the switch and our network of 10 computers now need only 10 cables and a switch with 10 plugs. 

With the switch it is possible to create a network of small networks if we connect two or more switches to each other, each with their own connected computers, perhaps a central switch with other small switch networks connected to it.

But how about connecting hundreds, thousands, billions of computers and other networks. We may think we can just keep connecting switches to form a tree of switches indefinitely but it poses an engineering problem. You see, the more switches a packet (data being transmitted) has to go through, the longer it takes to reach its destination. Remember, we had established that with a switch, messages are first relayed from swith to switch to swith and so on until it gets to the final recipient computer. Imagine if one switch fails, say a switch connecting several other switches. A large portion of devices would be disconnected.

To solve this problem of using switches to connect other networks, each local network is kept as small as possible, a device called a router is then used to connect these LAN (router connects to the switch). Simply put, a router is a computer that knows how to forward messages between networks (not computers) without going through layers of relays. When a packet arrives, the router reads the recipient address and forward the packet to the right recipient directly without going through layers of delays.

We are already getting close to what resembles an internet. We have moved from LAN to a bigger network connected with a router but we need a physical medium (cables) to connect routers of different networks in different areas. Luckily, at the start of the internet, such an infrastructure already was in existence - an infrastructure that connected many homes at the time -  the telephone network. But the telephone network transmit electric signals and not packets of data.
A special piece of equipment called a modem which turns the information from our network into information manageable by the telephone infrastructure and vice versa was designed. 

Side Note: The commercial router we purchase for browsing is likely a combination of switch, router, and a modem, all in one device.

So we are connected the telephone infrastructure. The next step is to send messages from our network to the network we want to reach. How can we make sure that the message doesn't just criss-cross the whole telephone network aimlessly. How is that done?

To do that (send from our network to network we want to reach - not the actual computer), we will connect our network to an Internet Service Provider (ISP). An ISP is a company that manages some special routers (note the word - routers) that a linked together and can also access other ISPs' routers (a network of ISPs). So the message from our network is carried through the network of ISP networks to the destination network. The internet consists of this whole infrastructure of networks.

### Finding Computers (within and outside your network)
If we want to send a message to a computer, we have to specify which one. Thus any computer linked to a network anywhere has a unique iddress that identifies it, called the Internet Protocol (IP) address. It is an address made of a series of four numbers separated by dots. e.g 192.0.2.172

Now that is fine for computers as computers can this address convention but we humans cannot remember this type of address. To make things easier, we can alias an IP address with a human-readable name called a domain name. FOr example, google.com is the domain name used in top of IP address 142.250.190.78

### The Internet and Web
But when we browse the web with a web browser, we usually use the domain name to reach a website. Does it mean the internet and the web are the same thing? Not that simple, as the internet  is the technical infrastructure which allows billions of computers to be connected all together. Among these computers, there are some special ones called web servers that are designed to send messages that web browsers can understand and interprete. So in summary, the internet is an infrastructure, whereas, the Web is a service built on top of this infrastructure. It is worth noting that there are several other services built on top of the internet, such as email, IRC.

Using domain names is just a way to identify a computer which the web leverages. However, what the web is a system of interlinked hypertext documents that are accessed via the internet

### The Intranet and Extranet
Intranet are private networks that are restricted to members of a particular organization. Used to provide a portal for members to securely access shared resources, collaborate and communicate. 

Extranets are similar except all or part of a private network is open to allow sharing and collaboration with other organizations. 

Both run on the same infratructure as the internet and use same protocols so they can be accessed by members from different physical location.

### How the web works - CLIENTS AND SERVERS
Computers connected to the internet can be called "clients" or 'servers' depending on the role they perform.
-> Clients are the typical web user's internet-connected devices (e.g laptop connected to a wifi/phone connected to mobile network) and web-accessing software installed on those devices (web browsers like chrome).

-> Servers are computers that store webpages, sites, or apps. The are always on and listening to client requests. They receive and process client requests. When a client wants to access a webpage, a copy of the webpage 'code' is download from the server onto the client machine to be rendered by the browser and displayed to the user.

#### The other parts:
Apart from client and servers, there are many other parts involved. To understand them, imagine that the internet is a road. On one end of the road is a client, which is a house. On the other end of the road is the store, which represents the server.

In order to get back and forth between the client and the server, the following things are required.
** An internet connection which allows us send and receive data on the internet. Liken it to the street between the house and the shop. Without this infrastructure there is no way to even place an order.
** TCP/IP: Transmission Control Protocol and Internet Protocol: These are communication protocols (rules/standards governing how devices communicate with each other over a network) that define how data should travel across the internet. Think of it like a standardized modalities of travel along this road eg car, bike etc.
** DNS: The Domain Name System is like the address book for websites. When we type a web address in our browser (domain name), the browser first contacts a DNS to find the website's actual IP address - the actual address the server serving the website before it can retrieve the website. The browser needs to find out which server the website lives on, so it can then send a HTTP messages to the right place. So a DNS lookup comes first before the browser sends the messsage to the server.
** HTTP: Hypertext Transfer Protocol: It is an application protocol that defines a language for clients and servers to speak to each other (defining not how data is transported but how it should be interpreted and used by applications and rules of exchange and communication). Think of it as the language that both parties understands to be used for placing/making orders for your goods.
** Files: A website is made up of different files, which are like the different goods you can buy from a shop. These files can come in two main types
    * Code: Websites are built primarily from HTML, CSS and JavaScript, which the browser interprets and assembles into a web page to display to the user.
    * Assets: This are a collective term for all other items that appear on a website - such as images, music, video, Word documents, and PDFs - that aren't code that the browser interprets.

### SO WHAT HAPPENS, EXACTLY?
When we type in a web address (which is technically a URL) into our browser address bar, the following steps occur.
    1. The browser goes to the DNS server and finds the real address of the server that the website lives on. (You look up the addres of the shop)
    2. The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client (You go the the shop to order your goods). This message, and all other data sent between the client and the server, is sent across our internet connection using TCP/IP. (client to server side)
    3. If the server approves the client's request, the server sends the client a "200 OK" message, which means ofcourse " Yes you can look at the website! Here it is", and then starts sending the website files to the browser as a series of small chunks called "data packets"
    4. The browser assembles the small chunks into a complete web page and displays it to you.

### DNS explained
Real web addresses (URLs) aren't the nice, memorable strings we type into our addess bar to find our favourite websites. They are special numbers that look like 192.0.2.172.

These numbers arecalled IP addresses and represents a unique location on the web. (some computer/server connected to the internet. cannot be a server without being part of the network). That was why the DNS was invented. This system uses special servers that match up a websites domain name to the website's real (IP) address.

Websites can be reached directly via their IP addresses if we have them. We can use a DNS lookup tool to find the IP address of a website.

### Packets Explained
We had used the term "packets" to describe the format in which the data is transferred between the client and the server. What does it really mean?

Basically, when data is sent across the web, it is sent in thousands of small chunks. There are multiple reasons why data is sent in small packets, but most significantly:
    * They are sometimes dropped or corrupted and, when this happens, it's quicker and easier to replace small chunks than entire files.
    * Additionally, the packets can be routed along different paths, making the exchange faster and allowing many different users to download the same website at the same time - not restricted to one path so other users can request same file. Also If each website was sent as a single chunk, only one user could download it at a time, which would make the web very inefficient and not much fun to use.

### HTTP Basics
The protocol uses a simple language of verbs to perform actions such as making requests. The HTTP [GET] is the one normally used to make HTTP requests of the type described above.
### Common Status Codes
-> 200 - HTTP request successful
-> 301 - Requested resource has been permanently moved to a new location, which is provided in the response. Used for redirecting content when its moved.
-> 400 - The server can't process the request. Usually when request is not in a format understood by server, or has errors in it.
-> 403 - The server will not give the client access to the requested resource. Usually when server knows who the client is, but they don't have permission to access the age.
-> 404 - The server cannot find the requested resource. Commonly returned if the URL is wrong or if content is deleted without putting a redirect in place.
-> 503 - The request cannpt be handled due to a problem with the server. This is common when servers are offine for maintenance, and it's expecte to be temporary.

### Components of a URL
Technically, web addresses that we type into the browser address bar form part of Uniform Resource Locators (URLs). They define the locations of unique resources on the internet.

A URL is a web address plus a protocol: for example, if we open a new tab in our browser, type in [developer.mozilla.org] into the address bar, and press enter/return, we'll be redirected to a URL like the following one:

[https://developer.mozilla.org/en-US/]

**********The main parts of the URL are:********************

** https
It is the protocol being used to send the request. In this case, we are using HTTPS, which is a secure version of HTTP that stops bad people from reading our data while it is being transported. On the modern web, pretty much every server uses HTTPS, so if we don't include it explicitly, the browser assumes that is what we are using and adds it for us.

** developer.mozilla.org
This is the domain name of the URL, which represents the top-level/surface level location of the server we are connecting to. Top-level means it is the main root/entry point or primay address for the web address we are tryin g to access. Note that the "developer" part is called the subdomain (which is a distinct content area within same domain). There is no subdomain without the domain. E.g there are other subdomains on Mozilla's site that host distinct content like support.mozilla.org and bugzilla.mozilla.org

** /en-US/
This is the path to the resource on the server that we are accessing. So we have reached the domain but the resource in organized and not all over the place. MDN for instance keeps all its US English content in a folder called en-US, which is what the URL is pointing to.
If our browser is set to prefer English content by default then this is the URL we would be redirected to when we type in developer.mozilla.org. If iur browser is set up to prefer a different language that MDN supports, such as French, we will be redirected to a different URL, such as https://developer.mozilla.org/fr/ instead. This isn't available to every website by default; the MDN developers have set MDN up like this to allow people easily access the language they prefer.


### WHAT IS A WEB SERVER
The term web server can refer to hardware and software, or both of them working together.
    * On the hardware side, a web server is a computer that stores web server software (the application that makes it a server) and a website's component files (e.g HTML docs, images, CSS stylesheets and JS files). It connects to the internet and supportsphysical data interchange with other devices connected to the web.

    * On the software side, a web server includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is a software that understands URLs (web addresses) and HTTP (the protocol used by browsers to view webpages). An HTTP server can be accessed throuh the domain names of the websites it stores, and delivers the content of these hosted websites to the end user's device.

At the most basic level, whenever a browser needs a file that is hosted on a web server, the browser requests the file via HTTP. When the request reaches the correct (hardware) server, the (software) HTTP server accepts the request, finds the reqested document, and sends it back to the browser, also through HTTP (if document is not found, a 404 response is sent). Basically an HTTP request is sent and an HTTP response is sent back.

To publish a website, we need either a static or a dynamic web server.
** Static web server, or stack, consists of a computer (hardware) with an HTTP server (software). It is called static because the server sends its hosted files as-is to our browser.

** Dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. It is called 'dynamic' because the application server updates the hosted files before sending content to our browser via the HTTP server.

For example, to produce the final webpages we see in the browser, the application server might fill an HTML template with content from the database. Sites like MDN or Wikipedia have thousands of webpages. Typically, these kinds of sites are composed of only a few HTML templates and a giant database, rather than thousands of static HTML documents. This setup makes it easier to maintain and deliver content.

*** HOW IT WORKS ***
1. Hosting files:
First a web server has to store the website's files, namely HTML, CSS, related assets like JS files, fonts, images and videos.

Technically, we could host all those files on our own computer, but it's far more convenient to store files on a dedicated web server because:
    *** A dedicated web server is typically more available (always up and running).
    *** Excluding a downtime and system troubles, a dedicated web server is always connected to the internet.
    *** A dedicated web server can have the same IP address all the time. This is known as 'dedicated IP address' (Not all ISPs provide a fixed IP address for home lines).
    *** A dedicated web server is typically maintained by a third party.

For these key reasons, finding a good hosting provider is a key part of building our website. Examine the various services companies offer. Choose one that fits your needs and budget. Services range from free to thousands of dollars per month. 

Once we find a wb hosting service, we must upload our files to our web server.

2. Communicating through HTTP
Second, a web server provides support for HTTP (Hypertext Transfer Protocol) which specifies how to transfer hypertext (linked web documents) between two computers. 

A protocol is a set of rules for communicating between two computers. HTTP is a textual stateless protocol.

Textual means all commands are plain-text and human readable
Stateless means neither the server nor the client remembers previous commnuications. For instance, relying on HTTP alone, a server cannot remember a password we typed or remember our progress on an incomplete transaction. We need an application server for tasks like that.

We need to keep in mind the following:
* Clients make HTTP requests to servers. Servers respond to a client's HTTP request.
* When requesting a file via HTTP, clients must provide the file's URL.
* The web server must answer every HTTP request, atleast with an error message.

On a web server, the HTTP server is responsible for processing and answering incoming requests.

    * Upon receiving a request, an HTTP server checks if the requested URL matches an existing file. 
    * If so, the web server sends the file content (not the file) back to the browser. If not, the server will check if it should generate a file dynamically for the request
    * If neither of these options are possible, the web server returns an error message to the browser, most commonly 404 Not Found. The 404 error is so common that some web designers devote considerable time and effort to designing 404 error pages.

*** STATIC AND DYNAMIC CONTENT ***
Roughly speaking, a server can (even though earlier we said either) serve either static or dynamic content. Remember that static means "served as-is". Static websites are the easiest to set up, we it is a good idea to make our first site a static site.

The term dynamic means that the server processes the content or even generates it on the fly from a database. This approach provides more flexibility, but the technical stack is mre complex, making it dramatically more challenging to build a website.

It is impossible to suggest a single off-the-shelf application server that will be the right solution for every possible use case. Some application servers are designed to host and manage blogs, wikis, or e-commerse solutions while others are more generic. If we are building a dynamic website, we should take time to research our requirements and find the technology that best fits our needs.

Most website developers would not need to create an application server from scratch, as there are many off-the-shelf solutions, many of which are configurable. But if we do need to create our own server, then we would probably want to use a server framework, leveraging its existing code libraries, and extending just the parts that we need in order to meet our use case. Only a relatively small amount of developers should need to develop a server completely from scratch: for example, in order to meet tight resource constraints on an embedded system 

An application server, which often works together with web servers, with web server passing on requests for dynamic content to the application server, are a type of server software designed to host and run business applications, especially those that require dynamic content generation and complex logic. It often acts like a middleman, facilitating communication between clients, and backend databases or other resources. Essentally it provides a platform for executing application code and managing resources, while also handling tasks like transaction processing, security, and resource pooling. Web servers just serve static content.

### THE CYBERSPACE
The internet and all the services built on top of it are collectivelycalled the cyberspace OR cyberspace can be defined as the global network of interconnected systems, which includes the internet, online services, and the data they contain.

Other terms like the digital landscape and Online world refer to some aspect of the cyberspace.
* Digital Landscape: refers to online services and platforms. It is the overall online environment including websites, social media platforms, online applications (apps) etc. 

* Online world: More encompassing than digital landscape. It refers to the global community of people, organizations and services that exist online.

### WHAT IS A URL
A URL (Uniform Resource Locator) is the address of a unique resource on the internet. It is one of the key mechanisms used by browsers to retrieve published resources, such as HTML pages, CSS documents and so on.

In theory, each valid URL points to a unique resource. In practice, there are ome exceptions, with the most common being that you can have a URL pointing to a resource that no longer exists or has moved. As the resource represented by the URL and the URL itself are handled by the Web server, it is up to the owner of the web server to carefully manage that resource and its associated URL.

*** THE ANATOMY OF A URL ***
Consider the following URLs:

https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL

Any of these URLs can be typed into our browser's address bar to tell it to load the associated web resource, which in all three cases, the web resource is a web page.

A URL is composed of different parts, some mandatory and others optional. The most important parts are discussed below:

http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument

http - scheme
www.example.com - domain name
80: port
/path/to/myfile.html - path to file
?key1=value1&key2=value2 - parameters
#SomewhereInTheDocument - Anchor

We might think of a URL like a regular postal mail address to someone. That someone can be a website (the entire page or a particular section of the website )
> Think of scheme like the postal service to use
> Think of domain name like city or town
> Think of port like the zip code
> Think of path like the building where the mail is to be delivered
> Think of parameters like the number of the apartment in the building
> Think of anchor like the actual person to whom the mail is addressed.

*** SCHEME http or https ***
The first part of a URL is the scheme, which indicates the protocol that the browser MUST use to request a resource (protocol in cyberspace terms means a set of method for exchanging or transferring data around a computer network). Usually, for websites, the protocol is HTTPS or HTTP (its unsecured version). Addressing web pages requires one of these two, but browsers also know how to handle other schemes such as 'mailto:' (to open a mail client), so don't be surprised if we see other protocols.


*** AUTHORITY www.example.com:80 ***
Next after the scheme is the authority, which is separated from the scheme by the character pattern ://. The authority includes the domain (e.g www.example.com) and in some cases an optional port (80) number, separated by a colon:

The term 'authority' in this context identifies the entity that has control over the resource being requested and is responsible for responding to requests.

    * The domain indicates which Web server is being requested. (so a domain is a disguise for the IP address of web server being requested). Usually this is a domain name, but an IP address may also be used (rarely for websites).
    * The port indicates the technical "gate" used to access the resources on the web server. It us usually omitted if the web server uses the standard ports of the HTTP protocol (80 for HTTP and 443 for HTTPS) to grant access to its resources. Otherwise it is mandatory.

NOTE: The : separates the scheme from the next part of the URL, while // indicates that the next part is authority. An example of a URL that doesn't use an authority is the mail client - mailto:emailname (just as a web browser is a web client). It contains a scheme but doesn't use an authority component, therefore, the colon is not follwed by two slashes and only acts as a delimiter between the scheme and mail address.

*** PATH TO RESOURCE /path/to/myfile.html *** 
It is the path to the resource on the web server. In the early days of the web, a path like this represented a physical file location on the web server. Nowadays, it is mostly an abstraction handled by web servers without any physical reality. ie a server might use a routing mechanism to map to a specific controller or template that generates the content dynamically. Allows for flexibility and cleaner urls.

*** PARAMETERS ?key1=value1&key2=value2 ***
These are extra parameters provided to the web server. Those parameters are a list of key/value pairs separated with the '&' symbol. The web server can use those parameters to do extra stuff before returning the resource. Note that each web server has its own rules regarding parameters, and the only reliable way to know if a specific web server is handling parameters is by asking the web server owner.

*** ANCHOR #SomewhereInTheDocument ***
This is an anchor to another part of the resource itself. An anchor represents a sort of "bookmark" inside the resource, giving the browser the directions to show the content located at that 'bookmarked' spot. On an HTML document, for example, the browser will scroll to the point where the anchor is defined; on a video or audio document, the browser will try to go to the time the anchor represents. It is worth noting that the part after the #, also known as the fragment identifier, is never sent to the server with the request.

### HOW TO USE URLs
Any URL can be typed right inside the browser's address bar to get to the resource behind it. But this is just the tip of the iceberg!

The HTML language makes extensive use of URLs:
    * to create links to other documents with the <a> element
    * to link a document with its related resources through various elements such as < link> or  < script>
    * to display media such as images (with the <img> element), videos (with the <video> element), sounds and music (with the <audio> element), etc.
    * to display other HTML documents with the <iframe> element.

Other technologies such as CSS or JavaScript, use URLs extensively, and these are really the heart of the web.

### Absolute URLs vs relative URLs



