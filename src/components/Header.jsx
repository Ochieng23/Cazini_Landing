"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "./Navlink";
import clsx from "clsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MobileNavLink({ href, children }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={href}
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-4 text-sm"
          )}
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <Menu.Button
            className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none max-w-full"
            aria-label="Toggle Navigation"
          >
            <MobileNavIcon open={open} />
          </Menu.Button>
          <Transition>
            <Transition.Child
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Menu.Items className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute py-4 inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
                <MobileNavLink className="pt-3" href="/">
                  Home
                </MobileNavLink>
                <hr className="m-2 border-slate-300/40" />
                <MobileNavLink className="pt-3" href="/pricing">
                  Pricing
                </MobileNavLink>
                <hr className="m-2 border-slate-300/40" />
                <MobileNavLink className="pt-3" href="/demo">
                  Contact Us
                </MobileNavLink>
                <hr className="m-2 border-slate-300/40" />
                <MobileNavLink className="pt-3" href="/demo">
                  Book Demo
                </MobileNavLink>
                <hr className="m-2 border-slate-300/40" />
              </Menu.Items>
            </Transition.Child>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = (e) => {
    if (
      !dropdownRef.current.contains(e.relatedTarget) &&
      !buttonRef.current.contains(e.relatedTarget)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleFocus = () => setIsDropdownOpen(true);
  const handleBlur = (e) => {
    if (
      !dropdownRef.current.contains(e.relatedTarget) &&
      !buttonRef.current.contains(e.relatedTarget)
    ) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <header className=" fixed top-0 shadow z-50 w-full bg-slate-50 bg-opacity-95 py-0 sm:py-0">
      <Container>
        <nav className="flex justify-between items-center ">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 md:h-10 w-auto" />
          </Link>
          <div className="hidden md:flex md:items-center md:gap-x-6 lg:gap-x-8 ml-auto">
            {/* <div
              className="relative"
              onMouseLeave={handleMouseLeave}
              onBlur={handleBlur}
            >
              <div
                className="inline-flex items-center gap-x-1.5 text-sm font-medium text-slate-900 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onFocus={handleFocus}
                ref={buttonRef}
              >
                Features
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-0 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  ref={dropdownRef}
                >
                  <div className="py-1">
                    <div className="relative group">
                      <Link
                        href="#insight1"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Ai Resume Builder
                        <ChevronRightIcon className="h-5 w-5 ml-2 text-gray-400 inline-block" />
                      </Link>
                      <div className="absolute left-full top-0 hidden ml-1 w-48 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                        <Link
                          href="https://10xtraders.ai/stock-market-snapshot/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Tracker
                        </Link>
                      </div>
                    </div>
                    <div className="relative group">
                      <Link
                        href="#insight2"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Application Tracker
                        <ChevronRightIcon className="h-5 w-5 ml-2 text-gray-400 inline-block" />
                      </Link>
                      <div className="absolute left-full top-0 hidden ml-1 w-48 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                        <Link
                          href="https://10xtraders.ai/forex-market-snapshot/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Tracker
                        </Link>
                      </div>
                    </div>
                    <div className="relative group">
                      <Link
                        href="#insight2"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Verify Credentials
                        <ChevronRightIcon className="h-5 w-5 ml-2 text-gray-400 inline-block" />
                      </Link>
                      <div className="absolute left-full top-0 hidden ml-1 w-48 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                        <Link
                          href="https://10xtraders.ai/forex-market-snapshot/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Tracker
                        </Link>
                      </div>
                    </div>
                    <div className="relative group">
                      <Link
                        href="#insight3"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Background Checker
                        <ChevronRightIcon className="h-5 w-5 ml-2 text-gray-400 inline-block" />
                      </Link>
                      <div className="absolute left-full top-0 hidden ml-1 w-48 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                        <Link
                          href="https://10xtraders.ai/crypto-market-snapshot/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Tracker
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
            <NavLink href="/">Home</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/demo">Contact Us </NavLink>
          </div>
          <div className="flex ml-4 items-center gap-x-5 md:gap-x-8">
            <Button
              className="hidden md:block lg:inline"
              href=" /demo"
              style={{ backgroundColor: "#7bed9f", color: "black" }}
            >
              <span>
                Join Waitlist <span className="hidden lg:inline"></span>
              </span>
            </Button>

            <div className="-ml-9 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
