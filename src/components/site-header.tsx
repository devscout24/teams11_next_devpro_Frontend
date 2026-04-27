import {SidebarTrigger} from '@/components/ui/sidebar';
import {
 InputGroup,
 InputGroupAddon,
 InputGroupInput,
} from '@/components/ui/input-group';
import {BellDot, SearchIcon} from 'lucide-react';
import {NavUser} from './nav-user';
import {sidebarItems} from '@/constants';
import {Button} from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex w-full items-center justify-between gap-4 px-4 lg:px-8">
        <div className="flex items-center gap-2 lg:gap-4">
          <SidebarTrigger className="-ml-1" />
          <div className="hidden sm:flex items-center">
            <InputGroup className="w-[200px] md:w-[300px] lg:w-[400px] bg-muted/50 border-none rounded-full h-10 px-4 shadow-none">
              <InputGroupAddon align="inline-start" className="pl-0 text-muted-foreground">
                <SearchIcon className="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput 
                placeholder="Search..." 
                className="placeholder:text-muted-foreground text-sm"
              />
            </InputGroup>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="sm:hidden rounded-full h-9 w-9 text-muted-foreground">
            <SearchIcon className="w-5 h-5" />
          </Button>
          
          <div className="relative">
            <span className="p-2 border border-border rounded-full cursor-pointer flex justify-center items-center hover:bg-muted transition-colors">
              <BellDot className="w-4 h-4 lg:w-5 h-5 text-muted-foreground" />
            </span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background" />
          </div>
          
          <NavUser user={sidebarItems.user} />
        </div>
      </div>
    </header>
  );
}
