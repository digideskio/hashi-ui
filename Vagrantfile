$script = <<SCRIPT
    sudo chown -R vagrant:vagrant work/
    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    sudo echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update
    sudo apt-get install -y yarn nodejs
    curl -sO https://storage.googleapis.com/golang/go1.7.4.linux-amd64.tar.gz
    sudo tar -C /usr/local -xzf go1.7.4.linux-amd64.tar.gz
    sudo rm go1.7.4.linux-amd64.tar.gz
    echo 'export GOPATH=$HOME/work' >> ~/.profile
    mkdir -p work/{pkg,bin}
    echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
    source ~/.profile
SCRIPT

Vagrant.configure("2") do |config|
    config.vm.box = "bento/ubuntu-16.04"
    config.vm.network "public_network", type: "dhcp"

    config.vm.synced_folder "./", "/home/vagrant/work/src/github.com/jippi/hashi-ui"
    config.vm.provision "shell", inline: $script, privileged: false

    config.vm.provider "virtualbox" do |v|
        v.memory = 1024
        v.cpus = 2
    end
end