# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

	config.vm.box      = "ubuntu14.04i386"
	config.vm.box_url  = "http://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-i386-vagrant-disk1.box"
	config.vm.hostname = "dev.dotastrat"
  	config.vm.network "forwarded_port", 
  		guest: 80, 
  		host: 8080
	# config.vm.provision :shell, 
	# 	:path => "provision/provision.sh"

	# Allows symbolic linking which solves the node_modules issue with windows
	# Always run command line as administrator for this to work
	config.vm.provider "virtualbox" do |v|
		v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
	end
end